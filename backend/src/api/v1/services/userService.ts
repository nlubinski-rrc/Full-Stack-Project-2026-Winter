import { User } from "../../../../generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const getUserById = async (id: string): Promise<User | null> => {
    const user: User | null = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });

    if (!user) {
        return null;
    } else {
        return user;
    }
};

export const createUser = async (userData: { id: string }): Promise<User> => {
    const newUser = await prisma.user.create({
        data: {
            ...userData,
        },
    });

    return newUser;
};
