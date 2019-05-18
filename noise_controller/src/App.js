import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <Router>
    <div className="App">
      <div>
        <Link to="/login"> Login Page </Link>
      </div>

      <div>
        <Link to="/protected"> Game Page </Link>
      </div>

      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" />

    </div>
    </Router>
  );
}

export default App;
