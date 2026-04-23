import { Prisma } from "../../../../generated/prisma/client"

const actorWithUsers = {
    include: {userActors: true}
} satisfies Prisma.ActorDefaultArgs;

export type ActorWithUsers = Prisma.ActorGetPayload<typeof actorWithUsers>;