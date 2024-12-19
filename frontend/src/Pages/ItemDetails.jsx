import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './itemsData'; 

const ItemDetails = () => {
  const { id } = useParams(); 
  const item = items.find((item) => item.id === parseInt(id)); 
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <p>Item not found</p>;
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1); 
  };

  const handlePurchase = () => {
    alert(`You have purchased ${quantity} of ${item.title} for a total of ${quantity * item.price} EGP.`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>
        <strong>Category:</strong> {item.category}
      </p>
      <p>
        <strong>Price:</strong> {item.price} EGP
      </p>
  
    </div>
  );
};

export default ItemDetails;
