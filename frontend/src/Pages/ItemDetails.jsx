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
    alert(
      `You have purchased ${quantity} of ${item.title} for a total of ${
        quantity * item.price
      } EGP.`
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={item.image} alt={item.title} style={styles.image} />
        <h1 style={styles.title}>{item.title}</h1>
        <p style={styles.description}>{item.description}</p>
        <p>
          <strong>Category:</strong> {item.category}
        </p>
        <p>
          <strong>Price:</strong> {item.price} EGP
        </p>
     
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #8D6E63, #4E342E)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#D84315",
  },
  description: {
    fontSize: "16px",
    color: "#6D4C41",
    marginBottom: "20px",
  },
  input: {
    width: "60px",
    padding: "5px",
    fontSize: "16px",
    textAlign: "center",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
};
export default ItemDetails;
