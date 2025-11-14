'use client'

import MovieForm from "@/components/Forms/MovieForm";
import MovieCard from "@/components/Cards/MovieCard";
import { searchMovies } from "@/lib/tmdb";
import { useState } from "react";

export default function AddMovie() {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (searchQuery: string) => {
        if (!query.trim()) return;

        setLoading(true);
        setError('');
        setMovies([]);

        try {
        const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err: any) {
            setError(err.message || 'Error fetching movies');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full min-h-[800px] h-auto bg-(--color1) bg-linear-to-b from-[#000000] to-[#210304] flex flex-col items-center py-[50px] gap-10 font-e">
            <MovieForm query={query} setQuery={setQuery} setMovies={setMovies} setError={setError} onSearch={handleSearch}/>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
}