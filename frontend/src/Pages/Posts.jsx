import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";

const Posts = () => { 
    return ( 
    <div> 
        
<Navbar/>
         <Link to="/Home" className="forgot-password-link"> products</Link>
       
    </div>
    )
}
export default Posts;