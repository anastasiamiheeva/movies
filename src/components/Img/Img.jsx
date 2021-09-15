import React, { useState } from 'react';
import classes from "./Img.module.css"
import preloader from '../../img/preloader.png'


const Img = ({ img, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  let image = new Image();
  image.src = img;
  image.onload = () => {
    setIsLoaded(true);
  };

  return (
      <div>
          {isLoaded 
            ? <img className={classes.movie__img} alt={title} src={img}/> 
            : <img className={classes.movie__img} alt={title} src={preloader}/>
          }
      </div>
  )
};




export default Img;