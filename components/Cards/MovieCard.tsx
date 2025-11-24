import Button from "../Button";
import PushButton from "../Buttons/PushButton";

export default function MovieCard({movie}: {movie: any}){

    const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/no-image-342x513.png';

    return (
        <div className="w-[342px] h-[600px] bg-(--color3) rounded-2xl overflow-hidden text-black border-4 border-(--color2) shrink-0">
            <div className="w-[342] h-[513] bg-black flex items-center justify-center">
                <img src={imageUrl} alt={movie.title} className="object-cover" />
            </div>
            <div className="p-2.5">
                <h1 className="truncate"><strong>{ movie.title }</strong></h1>
                <div className="flex justify-between">
                    <h2 className="text-[14px]"><strong>{ movie.release_date }</strong></h2>
                    <PushButton className="text-white w-20 h-10" to={`add/${movie.id}`}>Add</PushButton>
                </div>
            </div>
        </div>
    );
}