
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './pages/home/navbar/Navbar'
import Signup from'./pages/login/signup'
import Home from './pages/home/home'
import Login from './pages/login/login'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      
      
      
          
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    
    
    </Routes>
</BrowserRouter>
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
