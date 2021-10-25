
import React from 'react';
import cl from './MoviePage.module.css'
import { img_500, unavailable, unavailableLandscape } from '../../config/config';


const MoviePage = ({ 
  title,
  img,
  description,
  backdrop
 }) => {
  return (
      <div className={cl.wrap}>
        <img
          src={ img ? `${img_500}/${img}`: unavailable }
          alt={title}
          className={cl.img}
        />
        <img
          src={ backdrop ? `${img_500}/${backdrop}`: unavailableLandscape }
          alt={title}
          className={cl.backdrop}
        />
        <div className={cl.about}>
          <span className={cl.title}>
            {title} 
          </span>
          <span className={cl.description}>
            {description}
          </span>
        
        </div>
    </div>
  );
};

export default MoviePage;