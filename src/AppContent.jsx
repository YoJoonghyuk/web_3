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

