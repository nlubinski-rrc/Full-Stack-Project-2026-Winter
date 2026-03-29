let watchlist: any[] = [];

export const getAll = async () => {
    return watchlist;
};

export const add = async (item: any) => {
    watchlist.push(item);
};

export const remove = async (movieId: number) => {
    watchlist = watchlist.filter((item) => item.movieId !== movieId);
};