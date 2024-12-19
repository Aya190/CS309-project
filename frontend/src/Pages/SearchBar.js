// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ data, setFilteredItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // عندما يتغير النص في الـ Search Bar، يتم تحديث العناصر المفلترة
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // فلترة البيانات بناءً على تطابق الـ title مع النص المدخل
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    
    // إرسال العناصر المفلترة إلى الـ Parent component (ItemList)
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
