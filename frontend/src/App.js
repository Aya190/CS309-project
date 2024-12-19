import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './Pages/ItemList';
import ItemDetails from './Pages/ItemDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} /> 
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
