import React from 'react';
import cl from "./GenreItem.module.css"

const GenreItem = ({name, fn, genre, select}) => {
  return (
    <>
      <button onClick={() => fn(genre)} className={ cl.item}>{name}</button>
    </>
    
  );
};

export default GenreItem;