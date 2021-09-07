import React from 'react';
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.container}>
      <div className={s.teal}></div>
      <div className={s.grey}></div>
      <div className={s.teal}></div>
      <div className={s.grey}></div>
    </div>
  );
};

export default Loader;