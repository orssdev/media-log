import MovieCard from './MovieCard';

interface MovieListProps {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
  }[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (!movies.length) return null;

  return (
    <div className='mt-[30px] flex flex-wrap gap-5 justify-center'>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          overview={movie.overview}
          releaseDate={movie.release_date}
        />
      ))}
    </div>
  );
}