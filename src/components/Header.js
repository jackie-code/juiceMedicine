import React from 'react';
import '../appStyles/Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
      <header>
        <h1>This is a header </h1>
        <ul>
          {/* link is <a> and to is href in react */}
    <li><Link to="/welcome"> Welcome </Link> </li>
    <li><Link to="/create-juice"> Create Juice </Link> </li>

        </ul>
      </header>
    );
  }
  
  export default Header;

  