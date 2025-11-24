import { getPopularShows, searchTvShows} from "@/lib/tmdb";
import TVShowForm from "@/components/Forms/TVShowForm";
import TVShowCard from "@/components/Cards/TVShowCard";

export default async function SearchTVShow({searchParams}: {searchParams: {q?: string}}) {
    const params = await searchParams;
    const query = params.q || '';
    const shows: any[] = query ? await searchTvShows(query) : await getPopularShows();


    return (
        <div className="page">
            <div className="flex flex-col items-center py-[25px] gap-10 font-e">
                <TVShowForm />
                <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                    {shows.map(show => (
                        <TVShowCard key={show.id} show={show}/>
                    ))}
                </div>
            </div>
        </div>
    );
}