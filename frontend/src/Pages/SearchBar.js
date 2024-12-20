
import React, { useState } from 'react';

const SearchBar = ({ data, setFilteredItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    
    
    setFilteredItems(filteredData);
  };

  return (
    <input
      type="text"
      placeholder="Search for a dish..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
