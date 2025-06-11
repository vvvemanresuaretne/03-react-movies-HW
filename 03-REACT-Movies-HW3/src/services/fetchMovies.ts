const API_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(query: string | number | boolean) {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  if (!token) {
    throw new Error('TMDB token is missing. Please define VITE_TMDB_TOKEN in .env');
  }

  const response = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  return data.results;
}
