import React from 'react';
import MovieFilter from '../MovieFilter/MovieFilter';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header__wrap}>
      <h1 className={classes.header__title}>Movies</h1>
      
    </div>
  );
};

export default Header;