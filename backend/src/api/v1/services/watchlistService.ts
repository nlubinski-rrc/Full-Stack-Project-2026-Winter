import { prisma } from "../../../../prisma/client";

export const getUserWatchlist = async (userId: string) => {
    try {
        const userWatchlist = await prisma.watchlist.findMany({
            where: {
                userId: userId,
            },
            include: {
                movie: true,
            },
        });

        if (!userWatchlist) {
            return null;
        } else {
            return userWatchlist;
        }
    } catch (err: any) {
        return null;
    }
};

export const addToWatchlist = async (movieId: number, userId: string) => {
    try {
        const watchlistItem = await prisma.watchlist.create({
            data: {
                userId: userId,
                movieId: movieId,
            },
        });

        if (!watchlistItem) return null;
        console.log(watchlistItem);
        return watchlistItem;
    } catch (err: any) {
        return null;
    }
};

export const removeFromWatchlist = async (movieId: number, userId: string) => {
    try {
        const watchlistItem = await prisma.watchlist.deleteMany({
            where: {
                AND: [{ userId: userId }, { movieId: movieId }],
            },
        });

        if (!watchlistItem) return null;

        return watchlistItem;
    } catch (err: any) {
        return null;
    }
};
