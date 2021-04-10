/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { navList, link } from './Header-style';

const Header: React.FC = () => {
  return (
    <nav>
      <ul css={navList}>
        <li>
          <Link css={link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link css={link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link css={link} to="/stack">
            Stack
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
