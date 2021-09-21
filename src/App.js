import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import MyButton from './components/UI/button/MyButton';
import Navbar from './components/UI/Navbar/Navbar';
import { AuthContext } from './context/context';



function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
        <BrowserRouter>
        <Navbar/>
        <AppRouter/> 
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
