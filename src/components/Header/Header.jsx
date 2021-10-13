import React from 'react';
import cl from './Header.module.css'

const Header = () => {
  return <span onClick={() => window.scroll(0,0)} className={cl.header}>Movies</span>
};

export default Header;