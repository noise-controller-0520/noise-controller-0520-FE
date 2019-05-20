import React from "react";

import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
     
        <Link to="/register"> Sign-Up </Link>
      
        <Link to="/login"> Login </Link>
        
        <Link to="/classrooms"> Classrooms </Link>
     
        <Link to="/main-page"> Play </Link>

        <Link to="/scoreboard"> Scoreboard </Link>
      
    </nav>
  );
}

export default NavBar;
