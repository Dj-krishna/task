import React from 'react';
import './App.css';
import Login from './LoginForm';
import Data from './Data';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Data" component={Data} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
