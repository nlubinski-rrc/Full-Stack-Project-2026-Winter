import {
    QuerySnapshot,
    DocumentData,
    DocumentSnapshot,
} from "firebase-admin/firestore";
import { Course } from "src/models/courseModel";
import {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
} from "../repository/firestoreRepository";
import sendEmail from "../middleware/nodeMailer";
import { EmailFormat } from "src/models/nodeMailerModel";

const COLLECTION: string = "Courses";

/**
 * Responisble for the creation of a course
 * @param courseItem An item of the course info provided
 * @returns A clone of the course you created
 */
export const createCourse = async (courseItem: {
    courseId?: string,
    sectionId: number,
    restriction: string[]
}): Promise<Course> => {
    const newCourse: Partial<Course> = {
        ...courseItem
    };

    const course: string = await createDocument<Course>(COLLECTION, newCourse);
    return structuredClone({ courseId: course, ...newCourse } as Course);
};

/**
 * Responisble for grabbing all courses in firebase 
 * @returns An array of all courses
 */
export const getAllCourses = async (): Promise<Course[]> => {
    const snapshot: QuerySnapshot = await getDocuments(COLLECTION);
    const courseData: Course[] = snapshot.docs.map((doc) => {
        const course: DocumentData = doc.data();
        return {
            courseId: doc.id,
            ...course,
        } as Course;
    });
    console.log(">>>>")
    return courseData;
};

/**
 * Responsible for grabbing courses by a supplied id
 * @param courseId The id of the course you want to retireve
 * @returns The course you requested
 */
export const getCourseByCourseId = async (courseId:string): Promise<Course> => {
    const doc: DocumentSnapshot | null = await getDocumentById(
        COLLECTION,
        courseId
    );

    if (!doc) {
        throw new Error(`Course with ID ${courseId} not found`);
    }

    const courseData: DocumentData | undefined = doc.data();
    const newCourse: Course = {
        courseId: doc.id,
        ...courseData,
    } as Course;

    return structuredClone(newCourse);
};

/**
 * Responsible for updating course info
 * @param courseId The id of the course you want to update
 * @param courseData The data you want to add/edit
 * @returns The course in its updated form
 */
export const updateCourse = async (
    courseId: string,
    courseData: Pick<Course, "sectionId" | "restriction">
): Promise<Course> => {
    //console.log(courseId)
    const courseToUpdate: Course = await getCourseByCourseId(courseId);
    //console.log(courseToUpdate)
    if (!courseToUpdate) {
        throw new Error(`Course with ID ${courseId} not found`);
    }

    const updateCourse: Course = {
        ...courseToUpdate
    };
    if (courseData.sectionId !== undefined)
        updateCourse.sectionId = courseData.sectionId;
    if (courseData.restriction !== undefined)
        updateCourse.restriction = courseData.restriction;

    await updateDocument<Course>(COLLECTION, courseId, updateCourse);

    return structuredClone(updateCourse);
};

/**
 * Responible for deleting courses
 * @param courseId The course you want to delete
 */
export const deleteCourse = async (courseId: string): Promise<void> => {
    const courseToDelete: Course = await getCourseByCourseId(courseId);
    if (!courseToDelete) {
        throw new Error(`Course with ID ${courseId} not found`);
    }

    await deleteDocument(COLLECTION, courseId);
};