import "../Styles/Header.css"
import React from 'react';
import { Link } from 'react-router-dom';
import imagem from '../images/logo.header.png';
import Sidebar from '../components/Sidebar';

function Header() {
  const handleClickLogo = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <Link className="logo" to="/" onClick={handleClickLogo}>
        <img src={imagem} alt="Logo" />
      </Link>
      <Sidebar />
    </div>
  );
}

export default Header;

