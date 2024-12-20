import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './Pages/ItemList';
import ItemDetails from './Pages/ItemDetails';
import Login from './Pages/login/login';
import Signup from './Pages/login/signup';
import Home from './Pages/home/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/sign" element={<Signup/>} /> 
        <Route path="/itemlist" element={<ItemList />} /> 
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
