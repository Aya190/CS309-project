import "./sign.css";

const Login = () => {
  return (
    <body className="signin">
      <form className="Login">
        <span class="title">Login</span>

        <div className="inputs">
          <label for="email">Email</label>
          <input type="email" id="email" required></input>

          <label for="password">password</label>
          <input type="password" id="password" required></input>
        </div>

        <a className="links" href="forgotpassword">
          Forgotpassword?
        </a>
        <p>New User?</p>
        <a class="links" href="signup">
          Sign Up
        </a>

        <div className="submit1">
          <input type="submit" value="signin"></input>
        </div>
      </form>
    </body>
  );
};

export default Login;
