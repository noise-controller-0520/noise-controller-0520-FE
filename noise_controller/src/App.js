import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />

      <Route path="/sign-up" component={SignUp} />

      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/protected" />

    </div>
    </Router>
  );
}

export default App;
