import '../styles/NavBar.css';
import { Outlet } from 'react-router-dom';
import { FaMicrophone, FaSun } from 'react-icons/fa';

const NavBar = () => (
  <>
    <header className="header">
      <div className="logo">
        <img src="\assets\cinema.jpg" alt="logo" />
        <h1>Movie App</h1>
      </div>
      <div className="container">
        <ul>
          <li data-testid="microphone-icon">
            <FaMicrophone />
          </li>
          <li data-testid="sun-icon">
            <FaSun />
          </li>
        </ul>
      </div>
    </header>
    <Outlet />
  </>
);

export default NavBar;
