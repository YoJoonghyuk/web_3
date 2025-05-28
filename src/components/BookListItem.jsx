import React from 'react';

export function BookListItem({ book, onSelect }) {
  const title = book.volumeInfo.title || 'No Title';

  return (
    <div>
      <a href="#" onClick={(e) => { e.preventDefault(); onSelect(book.id); }}>
        {title}
      </a>
    </div>
  );
}
