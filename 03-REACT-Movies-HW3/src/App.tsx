'use client';

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar.tsx';

import { fetchMovies } from './services/fetchMovies';

export default function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    setMovies([]); // Очищаємо попередній результат

    try {
      const results = await fetchMovies(query);

      if (results.length === 0) {
        toast.error('No movies found for your request.');
        return;
      }

      setMovies(results);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      <main>
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
