/*
import { useState } from 'react';
import * as WatchlistService from '../services/WatchlistService';

type WatchlistItem = {
  movieId: number;
  movieTitle: string;
};

export function useWatchlistSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(false);

  const service = WatchlistService.fetchWatchlist();

  const search = async (query: string) => {
    setLoading(true);
    const found = await service.searchWatchlist(query);
    setResults(found);
    setLoading(false);
  };

  return { searchTerm, setSearchTerm, results, search, loading };
}

*/