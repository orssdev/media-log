import MovieForm from "@/components/Forms/MovieForm";
import MovieCard from "@/components/Cards/MovieCard";
import { getPopularMoviesServer, searchMoviesServer } from "@/lib/tmdb";

export default async function AddMovie({searchParams}: {searchParams: {q?: string}}) {
    const params = await searchParams;
    const query = params.q || "";
    const movies: any[] = query ? await searchMoviesServer(query) : await getPopularMoviesServer();

    return (
        <div className="w-full min-h-[800px] h-auto bg-(--color1) bg-linear-to-b from-[#000000] to-[#210304] flex flex-col items-center py-[50px] gap-10 font-e">
            <MovieForm />
            <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
}