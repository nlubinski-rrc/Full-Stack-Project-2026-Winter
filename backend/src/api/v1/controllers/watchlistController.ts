import * as watchlistService from "../services/watchlistService";

export const getWatchlist = async (req: any, res: any) => {
    const data = await watchlistService.getAll();
    res.json(data);
};

export const addToWatchlist = async (req: any, res: any) => {
    const item = req.body;
    await watchlistService.add(item);
    res.status(201).json({ message: "Added" });
};

export const removeFromWatchlist = async (req: any, res: any) => {
    const id = Number(req.params.id);
    await watchlistService.remove(id);
    res.json({ message: "Removed" });
};