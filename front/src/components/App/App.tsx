import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Stack from '../Stack/Stack';
import Home from '../Home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/stack" component={Stack} />
      </Switch>
    </Router>
  );
};

export default App;
