import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

export default function Searchresult() {
  const searchQuery = useSelector((state) => state.ui.search); // Get search query from Redux state

  return (
    <div className="hello">
      {searchQuery ? (
        <h1 style={{ margin: '.5em auto', marginTop: '10%' }}>
          there is nothing about "{searchQuery}"
        </h1>
      ) : (
        <h1>No search query</h1>
      )}
    </div>
  );
}
