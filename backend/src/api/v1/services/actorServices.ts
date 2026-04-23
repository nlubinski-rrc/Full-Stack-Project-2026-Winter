import { Actor } from "../../../../generated/prisma/client";
import { prisma } from "../../../../prisma/client"
import { ActorWithUsers } from "../types/actorWithUsers";

export const getAllActors = async(): Promise<ActorWithUsers[]> => {
    return prisma.actor.findMany({
        include: {
            userActors: true
        }
    });
}

export const getActorById = async(id: number): Promise<ActorWithUsers | null> => {
    try {
        const actor: ActorWithUsers | null = await prisma.actor.findUnique({
            where: {
                id: id
            },
            include: {
                userActors: true
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

// FAVOURITE ACTORS NOW HANDLED BY UserActor
//
// export const updateActor = async(
//     id: number,
//     actorData: {isFavourite: boolean}
// ): Promise<Actor> => {
//     const updateActor = await prisma.actor.update({
//         where: {
//             id: id
//         },
//         data: {
//             ...actorData
//         }
//     });

//     return structuredClone(updateActor);
// }
