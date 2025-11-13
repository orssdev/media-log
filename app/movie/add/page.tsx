'use client'

import MovieForm from "@/components/Forms/MovieForm";
import { useState } from "react";

export default function AddMovie() {
    const [query, setQuery] = useState('')
    const handleSearch = (searchQuery: string) => {
        console.log("Searching for:", searchQuery);
    }

    return (
        <div className="w-full min-h-[800px] h-auto bg-(--color1) bg-linear-to-b from-[#000000] to-[#210304] flex flex-col items-center py-[100px] gap-[50px]">
            <MovieForm query={query} setQuery={setQuery} onSearch={handleSearch}/>

            <div className="w-[342px] h-[650px] bg-(--color3) rounded-2xl overflow-hidden">
                <div className="w-full h-[513px] bg-amber-400"></div>
            </div>
        </div>
    );
}