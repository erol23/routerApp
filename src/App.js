import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>React Router</h2>
        <Switch>
          <Route path="/routerApp" component={Home} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
