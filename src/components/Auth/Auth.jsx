import React, { useContext } from 'react';
import { AuthContext } from '../../context/context';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import cl from './Auth.module.css'

const Auth = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const auth = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', true)
  }
  return (
    <div className={cl.wrap}>
      <h1 className={cl.title}>Авторизация</h1>
      <form onSubmit={auth}>
        <MyInput type="text" placeholder="Введите логин"/>
        <MyInput type="password" placeholder="Введите пароль"/>
        <MyButton>Войти</MyButton>
      </form>
      
    </div>
  );
};

export default Auth;