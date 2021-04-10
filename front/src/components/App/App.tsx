import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Stack from '../Stack/Stack';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/stack" component={Stack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
