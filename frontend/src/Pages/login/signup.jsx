
import'./sign.css'
const signup = () => {
return(
    <body className="Signup">
    <form className="signup">
    <span class="title">Signup</span>
   
    
  <div className="inputs">
    <label for="text">Username</label>
    <input type="text"  id="text" required></input>
    
       <label for="email">Email</label>
       <input type="email"  id="email" required></input>
     
  
    <label for="password">password</label>
    <input type="password" id="password"required></input>
  
  
    <label for="password">ConfirmPassowrd</label>
    <input type="password" id="password"required></input>
  
    
     <p>I already have an account?</p><a class="link1" href="login">Sign in</a>
     
     
       <div className="submit2">
        <input type="submit" value="signup"></input>
</div>
    
  </div>
</form>
</body>
);
}

export default signup