import '../Styles/Sidebar.css'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu} from 'react-icons/gi';
import React from 'react';




export default function Sidebar() {
  const handleClickLogo = () => {
    window.scrollTo(0, 0);
  };
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar" ref={ref}>
      <button className="buttonsidebar" onClick={() => setOpen(!open)}>
        <GiHamburgerMenu/>
      </button>
      <div className={`sidebar-content ${open && "show"}`}>
        <Link className="item_sidebar" to="/"onClick={handleClickLogo}>
          Home
        </Link>
        <Link className="item_sidebar" to="/mywork">
          Projetos
        </Link>
        <Link className="item_sidebar" to="/resume">
          Currículo
        </Link>
        <Link className="item_sidebar" to="/contato">
          Contato
        </Link>
      </div>
    </div>
  );
}
