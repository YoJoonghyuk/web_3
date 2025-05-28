import { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export function useBooksApi() {
  const {
    setBooks,
    setSelectedBook,
    setLoading,
    setError
  } = useContext(BooksContext);

  async function fetchBookList(query) {
    setLoading(true);
    setError(null);
    setSelectedBook(null);
    try {
      const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
      }
    } catch (e) {
      setError('Error fetching books.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  async function fetchBookDetails(bookId) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/${bookId}`);
      const data = await response.json();
      setSelectedBook(data);
    } catch (e) {
      setError('Error fetching book details.');
      setSelectedBook(null);
    } finally {
      setLoading(false);
    }
  }

  return {
    fetchBookList,
    fetchBookDetails
  }
}
