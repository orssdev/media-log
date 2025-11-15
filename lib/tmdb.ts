const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function searchMovies(query: string) {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search movies');

  const data = await res.json();
  return data.results;
}

export async function getPopularMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);

  if (!res.ok) throw new Error('Failed to fetch popular movies');

  const data = await res.json();
  return data.results;
}

export async function searchTvShows(query: string) {
  const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed to search TV shows');

  const data = await res.json();
  return data.results;
}

export async function getPopularShows() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);

  if (!res.ok) throw new Error('Failed to fetch popular shows');

  const data = await res.json();
  return data.results;
}