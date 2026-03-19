import { Section } from "../../../models/sectionModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Request, Response, NextFunction} from "express";
import { successReply, errorReply } from "../../../models/responseModel";
import * as sectionServices from "../services/sectionServices"
import { EmailFormat } from "../../../models/nodeMailerModel";
import sendEmail from "../middleware/nodeMailer";

/**
 * Responsible for creating a section
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const createSections = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const { location, teacher, capacity} = req.body;
        const sectionItem: Section = await sectionServices.createSection({ location, teacher, capacity});
        const email:EmailFormat = {
            to: process.env.EMAIL_RECIEVER,
            subject: "Creation of a section",
            text: `A section has been created with the ID:${sectionItem.sectionId}`
        }
        await sendEmail(email);
        res.status(HTTP_STATUS.CREATED).json(
            successReply(sectionItem, "Section created successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Section couldn't be created")
        );
    }
}

/**
 * Responsible for grabbing a section by its section id
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const getSectionBySectionId = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const id:string = req.body.sectionId
        const sectionData: Section = await sectionServices.getSectionBySectionId(id)
        res.status(HTTP_STATUS.OK).json(
            successReply(sectionData, "Section retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Section wasnt retrieved")
        );
    }
}

/**
 * Responsible for grabbing all sections
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const getAllSections = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const sectionData: Section[] = await sectionServices.getAllSections();
        res.status(HTTP_STATUS.OK).json(
            successReply(sectionData,"Section list retrieved successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Section list wasnt retrieved")
        );
    }
}

/**
 * Responsible for updating a section
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const updateSections = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const section:string = req.params.sectionId;
        const { location, capacity, teacher } = req.body;
        const updatedSection: Section = await sectionServices.updateSections( section, { location, capacity, teacher});
        res.status(HTTP_STATUS.OK).json(
            successReply(updatedSection, "Section info updated successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Section info couldnt be updated")
        );
    }
}

/**
 * Responsible for deleting a section
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The express middleware chaining function
 */
export const deleteSection = async (
    req: Request,
    res: Response,
    _next: NextFunction
): Promise<void> => {
    try {
        const sectionData:string = req.params.sectionId;
        await sectionServices.deleteSection(sectionData);
        const email:EmailFormat = {
            to: process.env.EMAIL_RECIEVER,
            subject: "Deletion of a section",
            text: `A section has been deleted with the ID:${sectionData}`
        }
        await sendEmail(email);
        res.status(HTTP_STATUS.OK).json(
            successReply(sectionData, "Section deleted successfully")
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(errorMessage);
        res.status(HTTP_STATUS.BAD_REQUEST).json(
            errorReply("Section couldnt deleted")
        );
    }
}