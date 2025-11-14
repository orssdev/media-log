'use client'

import { getPopularMovies } from "@/lib/tmdb";
import { useEffect } from "react";

interface MovieFormProps {
    query: string;
    setQuery: (value: string) => void;
    setMovies: (movies: any[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    onSearch: (query: string) => void;
}

export default function MovieForm({ query, setQuery, setMovies, setLoading, setError, onSearch }: MovieFormProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(query)
    }

    useEffect(() => {
        if (query === '') {
            const fetchPopular = async () => {
                setError('');
                try {
                    const results = await getPopularMovies();
                    setMovies(results);
                } catch (err: any) {
                    setError(err.message || 'Error fetching popular movies');
                }
            }

            fetchPopular();
        }
    }, [query]);

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="search for movie"
                className="pl-2.5 text-[24px] mr-2.5 border border-(--color2) w-[600px]"
            />
            <button type="submit" className="bg-(--color2) px-5 py-2">Search</button>
        </form>
    );
}