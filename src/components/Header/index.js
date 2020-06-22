import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';
import detail from '../../assets/icon.png';



export default function Header() {
  return(
    <header>
      <nav>
        <img src={logo}  alt="logo" className="logo-header" />
        <img src={detail} alt="capacete" className="detail"/>
      </nav>
    </header>
  );
}

