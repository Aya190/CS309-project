import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "../Pages/Profile";
const Profile=()=>{
    return(
        <Router>
      <Routes>
      
        <Route path="/Profile" element={<Profile />} />

      </Routes>
    </Router>

        
    )
}