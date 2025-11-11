'use client';

import { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from '../lib/tmdb';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err: any) {
      setError(err.message || 'Error fetching movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-5 text-center'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className='p-2.5 text-[16px] mr-2.5'
        />
        <button type="submit" className='py-2.5 px-5 bg-red-600'>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className='text-[#ff0000]'>{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
}