import GameCard from "@/components/Cards/GameCard";
import GameForm from "@/components/Forms/GameForm";
import { getPopularGamesServer, searchGamesServer } from "@/lib/rawg";

export default async function AddGame({ searchParams }: {searchParams: {q?: string}}) {
    const params = await searchParams
    const query = params.q || "";
    const games: any[] = query ? await searchGamesServer(query) : await getPopularGamesServer();

    return (
        <div className="w-full min-h-[800px] h-auto bg-(--color1) bg-linear-to-b from-[#000000] to-[#210304] flex flex-col items-center py-[50px] gap-10 font-e">
            <GameForm />
            <div className="flex flex-row overflow-x-auto gap-[25px] px-[25px] w-full">
                {games.map(game => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </div>
    );
}