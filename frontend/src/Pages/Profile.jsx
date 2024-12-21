import React ,{useState}from "react";
import man from './image/man.jpg'
import './Profile.css';
const Profile=()=>{
     const [setImage]=useState("");
   const handleFileChange=(event)=>{
     const file =event.target.files[0];
     if(file&&file.type.substring(0,5)==="mm")
     {
      setimage(file);
     }
     console.log("Uploaded file :",file);
   }
    return(
        <div className="profile-container">
          <h2>Profile Page </h2>
          <div className="profile-container-section">
            <div className="profile-avatar">
         <img
         src={man}
         alt="Profile Avatar "
         className="avatar-image"
         />
         </div>
         <div className="upload-section">
          <label htmlFor="upload-input" className="upload-label">
            
          </label>
          <input type ="file" id ="upload-input" className="upload-input"  onChange={handleFileChange}/>
        </div>

         </div>
         <h2  className="profile-name">Ali </h2>
      <p className="profile-bio">Businessman </p>
      <ul className="profile-info">
        <li><strong>Email:</strong> Ali.@gmail.com</li>
        
        
      </ul>
      
        </div>
    )
}
export default Profile;