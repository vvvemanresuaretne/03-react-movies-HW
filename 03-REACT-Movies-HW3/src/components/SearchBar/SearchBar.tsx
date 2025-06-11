'use client';

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const query = form.elements.query.value.trim();

    if (query === '') {
      toast.error('Please enter your search query.');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={styles.header} data-testid="search-header">
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form
          className={styles.form}
          ref={formRef}
          onSubmit={handleSubmit}
          data-testid="search-form"
        >
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            data-testid="search-input"
          />
          <button
            className={styles.button}
            type="submit"
            data-testid="search-button"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
