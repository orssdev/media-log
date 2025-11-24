import MovieForm from "@/components/Forms/MovieForm";
import MovieCard from "@/components/Cards/MovieCard";
import { getPopularMovies, searchMovies } from "@/lib/tmdb";

export default async function SeachMovie({searchParams}: {searchParams: {q?: string}}) {
    const params = await searchParams;
    const query = params.q || "";
    const movies: any[] = query ? await searchMovies(query) : await getPopularMovies();

    return (
        <div className="page">
            <div className="flex flex-col items-center py-[25px] gap-10 font-e">
                <MovieForm />
                <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] pb-[25px] w-full">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>

        </div>
    );
}