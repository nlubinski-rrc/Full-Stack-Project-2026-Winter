import { UserActor } from "../../../../generated/prisma/client"
import { prisma } from "../../../../prisma/client"

export const getUserActor = async(
    userId: string,
    actorId: number
): Promise<UserActor | null> => {
    const userActor = await prisma.userActor.findUnique({
        where: {
            userId_actorId: {
                userId: userId,
                actorId: actorId
            }
        }
    });

    if (!actorId) {
        return null
    } else {
        return userActor
    }
}

export const createUserActor = async(
    userId: string,
    actorId: number
): Promise<UserActor> => {
    const foundUserActor = await prisma.userActor.findUnique({
        where: {
            userId_actorId: {
                userId: userId,
                actorId: actorId
            }
        }
    });

    if (foundUserActor) {
        throw new Error(`Actor with id: ${actorId} already exists with user id: ${userId}`);
    }

    const newUserActor = await prisma.userActor.create({
        data: {
            userId: userId,
            actorId: actorId
        }
    });

    return newUserActor
}

export const deleteUserActor = async(
    userId: string,
    actorId: number
): Promise<void> => {
    await prisma.userActor.delete({
        where: {
            userId_actorId: {
                userId: userId,
                actorId: actorId
            }
        }
    });
}