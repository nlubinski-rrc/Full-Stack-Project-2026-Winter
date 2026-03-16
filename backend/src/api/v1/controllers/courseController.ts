import { Course } from "../../../models/courseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { NextFunction, Request, Response} from "express";
import { successReply, errorReply } from "../../../models/responseModel";
import * as courseServices from "../services/courseServices";
import { EmailFormat } from "../../../models/nodeMailerModel";
import sendEmail from "../middleware/nodeMailer";

/**
 * Reponsible for creating a course
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const createCourse = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const {sectionId, restriction } = req.body;
        const courseItem: Course = await courseServices.createCourse({ sectionId, restriction});
        const email:EmailFormat = {
            to: process.env.EMAIL_RECIEVER,
            subject: "Creation of a course",
            text: `A course has been created ${courseItem.courseId}`
        }
        await sendEmail(email);
        res.status(HTTP_STATUS.CREATED).json(
            successReply(courseItem, "Course created successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Course couldn't be created")
        );
    }
}

/**
 * Responsible for getting a course by its course id
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const getCourseByCourseId = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const id:string = req.body.courseId
        const courseData:Course = await courseServices.getCourseByCourseId(id)
        res.status(HTTP_STATUS.OK).json(
            successReply(courseData, "Course retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Course wasnt retrieved")
        );
    }
}

/**
 * Responsible for getting all courses
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const getAllCourses = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const courseData: Course[] = await courseServices.getAllCourses();
        res.status(HTTP_STATUS.OK).json(
            successReply(courseData,"Course list retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Course list wasnt retrieved")
        );
    }
}

/**
 * Responsible for updating a courses info
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const updateCourse = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const course:string = req.params.courseId;
        const { sectionId, restriction } = req.body;
        const updatedCourseInfo: Course = await courseServices.updateCourse( course, {sectionId, restriction});
        res.status(HTTP_STATUS.OK).json(
            successReply(updatedCourseInfo, "Course info updated successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Course info couldnt be updated")
        );
    }
}

/**
 * Responsible for deleting a course
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const deleteCourse = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const course:string = req.params.courseId;
        await courseServices.deleteCourse(course);
        const email:EmailFormat = {
            to: process.env.EMAIL_RECIEVER,
            subject: "Deletion of a course",
            text: `A course has been Deleted with the courseID:${course}`
        }
        await sendEmail(email);
        res.status(HTTP_STATUS.OK).json(
            successReply(course, "Course info deleted successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Course couldnt deleted")
        );
    }
}