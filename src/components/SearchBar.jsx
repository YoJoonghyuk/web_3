import React, { useState, useContext } from 'react';
import { useBooksApi } from '../hooks/useBooksApi';
import { BooksContext } from '../context/BooksContext';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const { fetchBookList } = useBooksApi();
  const { loading } = useContext(BooksContext);

  const handleSearch = () => {
    if (query.trim()) {
      fetchBookList(query.trim());
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div id="search-bar">
      <input
        type="text"
        id="search-input"
        placeholder="Search for books..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button
        id="search-button"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
}
