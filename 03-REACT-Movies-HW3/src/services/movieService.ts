const API_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(query) {
  const token = import.meta.env.VITE_TMDB_TOKEN;

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

