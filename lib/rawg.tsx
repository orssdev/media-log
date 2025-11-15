export async function searchGames(query: string) {
  const res = await fetch(`/api/game/search?q=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search games');

  const data = await res.json();
  return data.results;
}

export async function getPopularGames() {
  const res = await fetch(`/api/game/popular`);

  if (!res.ok) throw new Error('Failed to fetch popular games');

  const data = await res.json();
  return data.results;
}

const RAWG_API_KEY = process.env.RAWG_API_KEY;

export async function searchGamesServer(query: string) {
  const res = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${encodeURIComponent(query)}`);

  if (!res.ok) throw new Error('Failed search games');

  const data = await res.json();
  return data.results;
}

export async function getPopularGamesServer() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&ordering=-added&page_size=20`);

  if (!res.ok) throw new Error('Failed to fetch popular games');

  const data = await res.json();
  return data.results;
}