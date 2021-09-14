import React from 'react';
import MovieFilter from '../MovieFilter/MovieFilter';
import classes from './Header.module.css'

const Header = ({filter, setFilter}) => {
  return (
    <div className={classes.header__wrap}>
      <h1 className={classes.header__title}>Movies</h1>
      <MovieFilter filter={filter} setFilter={setFilter}/>
    </div>
  );
};

export default Header;