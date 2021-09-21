import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
          
          <div className="navbar__links">
            { isAuth 
              ? <>
              <Link to="/movies">Movies</Link>
              <MyButton onClick={logout}>Выйти</MyButton></>
              : <> 
              <Link to="/movies">Movies</Link>
              <Link to="/auth">Войти</Link></>
            }
          </div>
        </div>
  );
};

export default Navbar;