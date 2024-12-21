import "./Navbar.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a className="link" href="home">
            Home
          </a>
          <a className="link" href="Profile">
            Profile
          </a>
          <a className="link" href="login">
            LogIn
          </a>
          <a className="link" href="signup">
            Signup
          </a>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
