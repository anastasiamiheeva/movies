import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
import AppRouter from './components/AppRouter';
import SimpleBottomNavigation from './components/BottomNav';




function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='App'>
      <AppRouter/>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  )
}

export default App;
