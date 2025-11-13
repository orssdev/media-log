'use client'

interface MovieFormProps {
    query: string;
    setQuery: (value: string) => void;
    onSearch: (query: string) => void;
}

export default function MovieForm({ query, setQuery, onSearch }: MovieFormProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="search for movie"
                className="pl-2.5 text-[24px] mr-2.5 font-e border border-(--color2) w-[600px]"
            />
            <button type="submit" className="bg-(--color2) px-5 py-2">Search</button>
        </form>
    );
}