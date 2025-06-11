import axios, { AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://developer.themoviedb.org/docs/getting-started';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGQ3NWU3ZmRhNDQwYTJmYzg2M2U2NWI1YTIwM2M3MyIsIm5iZiI6MTc0OTQ5Nzg1My45NjMsInN1YiI6IjY4NDczN2ZkOGNlNzI1MmYzNzlmNTEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rFLbPf9D0lES322qH4js6ndMyjrQ73IzEGg9laBpLVk';

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    const response: AxiosResponse<MoviesResponse> = await axios.get(API_URL, config);
    return response.data.results;
  } catch (error: any) {
    console.error('Ошибка при fetchMovies:', error.response ?? error.message);
    throw error;
  }
};

