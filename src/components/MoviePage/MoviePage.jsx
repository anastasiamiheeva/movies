
import React from 'react';
import cl from './MoviePage.module.css'
import { img_500, unavailable, unavailableLandscape } from '../../config/config';
import MovieComents from '../MovieComments/MovieComents';
import { getYearFromDate } from '../../utils/date';


const MoviePage = ({ 
  title,
  img,
  description,
  backdrop,
  id,
  release
 }) => {

  const year = getYearFromDate(release)
   console.log(year)
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
          <MovieComents id={id}/>
        </div>
        
    </div>
  );
};

export default MoviePage;