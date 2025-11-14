'use client'

import { getPopularMovies, searchTvShows } from "@/lib/tmdb";
import { useEffect, useState } from "react";
import TVShowForm from "@/components/Forms/TVShowForm";
import TVShowCard from "@/components/TVShowCard";

export default function AddTVShow() {
    const [query, setQuery] = useState('')
    const [shows, setShows] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (searchQuery: string) => {
        if (!query.trim()) return;

        setLoading(true);
        setError('');
        setShows([]);

        try {
        const results = await searchTvShows(searchQuery);
            setShows(results);
        } catch (err: any) {
            setError(err.message || 'Error fetching shoews');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full min-h-[800px] h-auto bg-(--color1) bg-linear-to-b from-[#000000] to-[#210304] flex flex-col items-center py-[50px] gap-10 font-e">
            <TVShowForm query={query} setQuery={setQuery} setShows={setShows} setLoading={setLoading} setError={setError} onSearch={handleSearch}/>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                {shows.map(show => (
                    <TVShowCard key={show.id} show={show}/>
                ))}
            </div>
        </div>
    );
}