import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Stack from '../Stack/Stack';

const Header: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/stack">Stack</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default Header;
