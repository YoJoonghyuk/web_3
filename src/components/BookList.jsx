import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';
import { BookListItem } from './BookListItem';

export function BookList({ onSelectBook }) {
  const { books, loading, error } = useContext(BooksContext);

  if (loading) return <p style={{textAlign: 'center'}}>Loading books...</p>;
  if (error) return <p style={{textAlign: 'center', color: 'red'}}>{error}</p>;
  if (books.length === 0) return <p style={{textAlign: 'center'}}>No books found.</p>;

  return (
    <div id="book-list">
      {books.map(book => (
        <BookListItem key={book.id} book={book} onSelect={onSelectBook} />
      ))}
    </div>
  );
}
