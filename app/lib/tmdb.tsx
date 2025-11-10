export async function searchMovies(query: string) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) throw new Error('Missing TMDB API key');

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
  );

  if (!res.ok) throw new Error('Failed to fetch movies');

  const data = await res.json();
  return data.results;
}