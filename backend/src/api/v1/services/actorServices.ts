import { Actor } from "../../../../generated/prisma/client";
import { prisma } from "../../../../prisma/client"

export const getAllActors = async(): Promise<Actor[]> => {
    return prisma.actor.findMany();
}

export const getActorById = async(id: number): Promise<Actor | null> => {
    try {
        const actor = prisma.actor.findUnique({
            where: {
                id: id
            }
        });

        if (!actor) {
            return null;
        } else {
            return structuredClone(actor);
        }
    } catch (error: unknown) {
        throw new Error(`Failed to retrieve actor with ID ${id}`);
    }
}
