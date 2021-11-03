
import React from 'react';
import cl from './MoviePage.module.css'
import { img_300, unavailable, unavailableLandscape } from '../../config/config';
import MovieComents from '../MovieComments/MovieComents';
import { getYearFromDate } from '../../utils/date';


const MoviePage = ({ 
  title,
  img,
  description,
  backdrop,
  id,
  release,
  production_countries,
  genres,
  vote_average,
 }) => {

  const year = getYearFromDate(release)
   console.log(year)
  return (
    //   <div className={cl.wrap}>
    //       <img
    //         src={ img ? `${img_500}/${img}`: unavailable }
    //         alt={title}
    //         className={cl.img}
    //       />
    //       <img
    //         src={ backdrop ? `${img_500}/${backdrop}`: unavailableLandscape }
    //         alt={title}
    //         className={cl.backdrop}
    //       />
    //     <div className={cl.about}>
    //       <div className={cl.title_wrap}>
    //         <span className={cl.title}>
    //           {title} 
    //         </span>
    //         <span className={cl.year}>{year}</span>
            
            
    //       </div>
          
    //       <span className={cl.description}>
    //         {description}
    //       </span>
    //       <MovieComents id={id}/>
    //     </div>
        
    // </div>
  );
};

export default MoviePage;