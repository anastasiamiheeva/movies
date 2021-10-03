import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import cl from './Navbar.module.css';

const Navbar = () => {
  const router = useHistory()
  return (
    <div className={cl.navbar}>
      <div className={cl.navbar__links}>
        <button onClick={() => router.goBack() }>Back</button>
      </div>
    </div>
  );
};

export default Navbar;