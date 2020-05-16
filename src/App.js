import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// custome imports
import Home from './pages/Home';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/withdraw">Withdraw</NavLink></li>
            <li><NavLink to="/deposit">Deposit</NavLink></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/deposit" component={Deposit} />
          <Route exact path="/withdraw" component={Withdraw} />
        </header>
      </div>
    </Router>
  );
}

export default App;
