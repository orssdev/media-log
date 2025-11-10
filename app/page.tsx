'use client'

import { useState } from "react";
import styles from './page.module.css'
import MovieCard from "./components/MovieCard";
import { searchMovies } from "./lib/tmdb";

export default function Home() {
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
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
