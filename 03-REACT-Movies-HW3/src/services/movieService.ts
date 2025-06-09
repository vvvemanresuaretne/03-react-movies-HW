import axios, { AxiosResponse } from 'axios';
import { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = 'тут_твій_токен'; // можеш зберігати в env-змінній

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<FetchMoviesResponse> = await axios.get(BASE_URL, {
      params: { query },
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
