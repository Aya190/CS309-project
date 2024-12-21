import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './items.css';
import SearchBar from './SearchBar';
import { items } from './itemsData';

const ItemList = () => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/creat")
      .then((response) => setFilteredItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="items-container">
      <SearchBar data={items} setFilteredItems={setFilteredItems} />
      <div className="grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="card">
              <Link to={`/item/${item.id}`} className="link">
                <img src={item.image} alt={item.title} className="image" />
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-items">No items found</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
