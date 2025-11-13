

export default function MovieCard({movie}: {movie: any}){
    const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/no-image-342x513.png';
    return (
        <div className="w-[342px] h-[600px] bg-(--color3) rounded-2xl overflow-hidden text-black border-4 border-(--color2)">
            {/* <div className="w-full h-[278px]"></div> */}
            <img src={imageUrl} alt={movie.title} className="object-cover" />
            <div className="p-2.5">
                <h1><strong>{ movie.title }</strong></h1>
                <h2 className="text-[14px]"><strong>{ movie.release_date }</strong></h2>
            </div>
        </div>
    );
}