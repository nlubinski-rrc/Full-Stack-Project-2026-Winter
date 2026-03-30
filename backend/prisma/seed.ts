import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import {actors, movies, reviews} from "./seedData";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function main() {
    for (const movie of movies) {
        const result = await prisma.movie.upsert({
            where: { title: movie.title },
            update: {},
            create: {
                title: movie.title,
                overview: movie.overview,
                averageRating: movie.averageRating,
                releaseDate: movie.releaseDate
            },
        });
        console.log(result);
    }

    for (const review of reviews) {
        const result = await prisma.review.create({
            data: {
                review: review.review,
                reviewOutOfTen: review.reviewOutOfTen,
                movie: {
                    connect: {
                        title: review.movieName,
                    },
                },

            },
        });
        console.log(result);
    }

    for (const actor of actors) {
        const result = await prisma.actor.create({
            data: {
                name: actor.name,
                isFavourite: actor.isFavorite
            }
        });
    }
}
main()
    .then(async () => {
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
    });