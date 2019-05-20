import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SignUp from './components/Sign-up/SignUp';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import MainPage from './components/Main-page/MainPage';
import Scoreboard from './components/Scoreboard/Scoreboard';
import ClassPage from './components/Main-page/MainPage';

function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />

      <Route path="/register" component={SignUp} />

      <Route path="/login" component={Login} />

      <PrivateRoute path="/classrooms" component={ClassPage} />

      <PrivateRoute path="/main-page" component={MainPage} />

      <PrivateRoute path="/scoreboard" component={Scoreboard} />

    </div>
    </Router>
  );
}

export default App;
