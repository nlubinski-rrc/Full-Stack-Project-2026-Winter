export interface movie {
    Id: number;
    title: string;
    overview: string;
    genreIds: number[];
    averageRating: number; // 1-10
    releaseDate: string
}