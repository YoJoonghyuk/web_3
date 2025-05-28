import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

export function BookDetails() {
  const { selectedBook, loading, error } = useContext(BooksContext);

  if (loading) return <p style={{textAlign: 'center'}}>Loading details...</p>;
  if (error) return <p style={{textAlign: 'center', color: 'red'}}>{error}</p>;
  if (!selectedBook) return <p style={{textAlign: 'center'}}>Select a book to see details.</p>;

  const volumeInfo = selectedBook.volumeInfo || {};

  return (
    <div id="book-details">
      <img
        src={volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150x250?text=No+Image'}
        alt="Book Cover"
      />
      <h2>{volumeInfo.title || 'No Title'}</h2>
      <p><strong>Author:</strong> {volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}</p>
      <p><strong>Publisher:</strong> {volumeInfo.publisher || 'Unknown'}</p>
      <p><strong>Description:</strong> {volumeInfo.description || 'No description available.'}</p>
    </div>
  );
}
