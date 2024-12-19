import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './items.css';
import SearchBar from './SearchBar';
import { items } from './itemsData';

const ItemList = () => {
  const [filteredItems, setFilteredItems] = useState(items);

  return (
    <div className="items-container">
      <SearchBar data={items} setFilteredItems={setFilteredItems} />
      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center',
              }}
            >
              <Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
