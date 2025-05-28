import React from 'react';
import { BooksProvider } from './context/BooksContext';
import { SearchBar } from './components/SearchBar';
import { BookList } from './components/BookList';
import { BookDetails } from './components/BookDetails';
import { useBooksApi } from './hooks/useBooksApi';

export function App() {
  return (
    <BooksProvider>
      <AppContent />
    </BooksProvider>
  );
}

function AppContent() {
  const { fetchBookDetails } = useBooksApi();

  return (
    <>
      <h1 style={{ color: '#a0522d', textAlign: 'center' }}>Google Books Library</h1>
      <SearchBar />
      <BookList onSelectBook={fetchBookDetails} />
      <h2 style={{ color: '#a0522d', textAlign: 'center' }}>Details</h2>
      <BookDetails />
    </>
  );
}

