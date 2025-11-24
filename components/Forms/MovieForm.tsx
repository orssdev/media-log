'use client'

import { useSearchParams, useRouter} from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);

    useEffect(() => {
        setQuery(initialQuery);
    }, [initialQuery]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/movie/add?q=${encodeURIComponent(query)}`);
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="search for movie"
                className="pl-2.5 text-[24px] mr-2.5 border border-(--color2) md:w-[600px]"
            />
            <button type="submit" className="bg-(--color2) px-5 py-2">Search</button>
        </form>
    );
}