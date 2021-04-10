/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import { navList, navMain, crudLogo } from './Header-style';
import { Typography } from '@material-ui/core';
import logo from '../../resources/logo.png';
import './Headers.css';

const Header: React.FC = () => {
  return (
    <Typography variant="h5" color="primary">
      <nav css={navMain}>
        <ul css={navList}>
          <li>
            <NavLink className="navLink" to="/">
              <img src={logo} css={crudLogo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navLink"
              activeClassName="activeNavLink"
              to="/stack"
            >
              Stack
            </NavLink>
          </li>
        </ul>
      </nav>
    </Typography>
  );
};

export default Header;
