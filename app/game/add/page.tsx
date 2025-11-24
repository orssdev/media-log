import GameCard from "@/components/Cards/GameCard";
import GameForm from "@/components/Forms/GameForm";
import { getPopularGames, searchGames } from "@/lib/rawg";

export default async function SearchGame({ searchParams }: {searchParams: {q?: string}}) {
    const params = await searchParams
    const query = params.q || "";
    const games: any[] = query ? await searchGames(query) : await getPopularGames();

    return (
        <div className="page">
            <div className="flex flex-col items-center py-[25px] gap-10 font-e">
                <GameForm />
                <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                    {games.map(game => (
                        <GameCard key={game.id} game={game}/>
                    ))}
                </div>
            </div>
        </div>
    );
}