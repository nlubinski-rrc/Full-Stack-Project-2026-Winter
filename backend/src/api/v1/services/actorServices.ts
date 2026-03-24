import { string } from "node_modules/joi/lib";
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
            return actor;
        }
    } catch (error: unknown) {
        throw new Error(`Failed to retrieve actor with ID ${id}`);
    }
}

export const createActor = async(actorData {
    name: string,
    actorMovies: []
}): Promise<Actor> => {

}