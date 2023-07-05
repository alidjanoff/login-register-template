import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">WebSite</Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              <li className="navItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/login">Login</Link>
              </li>
              <li className="navItem">
                <Link to="/register">Register</Link>
              </li>
            </ul>
            <div className="userArea">
              <Link to="/profile">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                  alt="user-img"
                />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
