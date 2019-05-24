import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SignUp from './components/Sign-up/SignUp';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';
import GamePage from './components/GamePage/GamePage';
import ScoresPage from './components/Scoreboard/ScoresPage';
import ClassesPage from './components/ClassListPage/ClassListPage';

function App() {

  return (
    <Router>
    <div className="App">

      <Route exact path="/" component={SignUp} />

      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/classrooms" component={ClassesPage} />

      <PrivateRoute exact path="/game-page/:id" component={GamePage} />

      <PrivateRoute path="/scoreboard/" component={ScoresPage} />


      <footer>
				<p>&copy;Noise-Listener. All Rights Reserved</p>
			</footer>
    </div>
    </Router>
  );
}

export default App;
