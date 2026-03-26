# Movie Watchlist Architecture

**Bhavdeep Bhavdeep**  
*Full-Stack-Project-2026-Winter | March 1, 2026*

## Search Hook (`useWatchlistSearch.tsx`)

**Purpose:** Manages search state and coordinates data fetching for watchlist search UI.

**Parameters/Returns:**
Returns: {
results: WatchlistItem[],
searchQuery: string,
setSearchQuery: (query: string) => void,
loading: boolean
}

**Features:** 
- Real-time search debouncing (300ms)
- Loading states management
- Empty query handling

**Logic:** Orchestrates service calls, manages React state, prevents excessive API calls.

**Used By:**
- `WatchlistSearchPage.tsx` - Main search page component

## Watchlist Service (`WatchlistService.ts`)

**Purpose:** Handles business logic for watchlist operations.

**Functions:**
```typescript
async searchWatchlist(query: string): Promise<WatchlistItem[]> {
  if (!query.trim()) return [];  // Input validation
  return this.repo.search(query); // Delegate to data layer
}