import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import classes from './Header.module.css'

const Header = ({movies}) => {
  return (
    <div className={classes.header__wrap}>
      <h1 className={classes.header__title}>Movies</h1>
      <SearchForm movies={movies}/>
    </div>
  );
};

export default Header;