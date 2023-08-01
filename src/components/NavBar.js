import { FaMicrophone, FaSun } from 'react-icons/fa';

const NavBar = () => (
  <>
    <header className="header">
      <div className="container">
        <ul>
          <li>
            <FaMicrophone />
          </li>
          <li>
            <FaSun />
          </li>
        </ul>
      </div>
    </header>
  </>
);

export default NavBar;
