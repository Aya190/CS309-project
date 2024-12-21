import React from "react";
import "./home.css";
import Layout from "./navbar/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <Layout />
      <h1>Friends Restaurant</h1>
      <h3>Welcome to our Resturant </h3>
      <h3> Where every meal is a celebration </h3>
      <h3>Join us for a culinary adventure.</h3>
      <Link to="/itemlist">
        <button>Go To Item List</button>
      </Link>
    </div>
  );
};

export default Home;
