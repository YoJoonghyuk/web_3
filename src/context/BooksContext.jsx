import React, { createContext, useState } from 'react';

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <BooksContext.Provider value={{
      books,
      setBooks,
      selectedBook,
      setSelectedBook,
      loading,
      setLoading,
      error,
      setError
    }}>
      {children}
    </BooksContext.Provider>
  )
}
