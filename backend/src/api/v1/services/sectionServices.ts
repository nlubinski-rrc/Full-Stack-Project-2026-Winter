import {
    QuerySnapshot,
    DocumentData,
    DocumentSnapshot,
} from "firebase-admin/firestore";
import {
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
} from "../repository/firestoreRepository";
import { Section } from "src/models/sectionModel";

const COLLECTION: string = "Section";

/**
 * Responisble for creating a section
 * @param sectionItem The info for the section that you provided
 * @returns The created section
 */
export const createSection = async (sectionItem: {
    sectionId?: string,
    location: string,
    teacher: string,
    capacity: string,
}): Promise<Section> => {
    const newSection: Partial<Section> = {
        ...sectionItem
    };

    const review: string = await createDocument<Section>(COLLECTION, newSection);
    return structuredClone({ sectionId: review, ...newSection } as Section);
};

/**
 * Responsible for grabbing all the sections
 * @returns All the sections
 */
export const getAllSections = async (): Promise<Section[]> => {
    const snapshot: QuerySnapshot = await getDocuments(COLLECTION);
    const sectionData: Section[] = snapshot.docs.map((doc) => {
        const section: DocumentData = doc.data();
        return {
            sectionId: doc.id,
            ...section,
        } as Section;
    });

    return sectionData;
};

/**
 * Responible for getting a section by its section id
 * @param id The sections id you want to retrieve
 * @returns The section of the id you provided
 */
export const getSectionBySectionId = async (id:string): Promise<Section> => {
    const doc: DocumentSnapshot | null = await getDocumentById(
        COLLECTION,
        id
    );

    if (!doc) {
        throw new Error(`Section with ID ${id} not found`);
    }

    const sectionData: DocumentData | undefined = doc.data();
    const newReview: Section = {
        sectionId: doc.id,
        ...sectionData,
    } as Section;

    return structuredClone(newReview);
};

/**
 * Responible for updating a section
 * @param id The id of the section you want to update
 * @param sectionData The info you want to update in the section
 * @returns The updated section
 */
export const updateSections = async (
    id: string,
    sectionData: Pick<Section, "location" | "capacity" | "teacher">
): Promise<Section> => {
    const sectionToUpdate: Section = await getSectionBySectionId(id);
    if (!sectionToUpdate) {
        throw new Error(`Section with ID ${id} not found`);
    }

    const updatedReview: Section = {
        ...sectionToUpdate
    };
    if (sectionData.location !== undefined)
        updatedReview.location = sectionData.location;
    if (sectionData.capacity !== undefined)
        updatedReview.capacity = sectionData.capacity;
    if (sectionData.teacher !== undefined)
        updatedReview.teacher = sectionData.teacher;

    await updateDocument<Section>(COLLECTION, id, updatedReview);

    return structuredClone(updatedReview);
};

/**
 * Responsible for deleting a section
 * @param id The id of the section you want to delete
 */
export const deleteSection = async (id: string): Promise<void> => {
    const reviewToDelete: Section = await getSectionBySectionId(id);
    if (!reviewToDelete) {
        throw new Error(`Section with ID ${id} not found`);
    }

    await deleteDocument(COLLECTION, id);
};