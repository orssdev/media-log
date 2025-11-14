export async function searchMovies(query: string) {
  const res = await fetch(`/api/movie/search?q=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search movies');

  const data = await res.json();
  return data.results;
}

export async function getPopularMovies() {
  const res = await fetch(`/api/movie/popular`);

  if (!res.ok) throw new Error('Failed to fetch popular movies');

  const data = await res.json();
  return data.results;
}

export async function searchTvShows(query: string) {
  const res = await fetch(`/api/tv/search?q=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed to search TV shows');

  const data = await res.json();
  return data.results;
}

export async function getPopularShows() {
  const res = await fetch(`/api/tv/popular`);

  if (!res.ok) throw new Error('Failed to fetch popular shows');

  const data = await res.json();
  return data.results;
}