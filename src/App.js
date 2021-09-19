import React from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import AppRouter from './components/AppRouter';



function App() {
 
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/movies">Movies</Link>
          <Link to="/auth">Auth</Link>
        </div>
      </div>
      <AppRouter/> 
    </BrowserRouter>
    
  )
}

export default App;
