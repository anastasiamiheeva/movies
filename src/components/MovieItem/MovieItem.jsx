import React, { useState } from "react";
import { Route, Router, Switch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../config/config";
import MoviePage from "../../pages/MoviePage/MoviePage";

import ContentModal from "../UI/ContentModal/ContentModal";
import cl from './MovieItem.module.css'



const MovieItem = ({
  title,
  img,
  genres,
  year,
  rating,
  id,
  media_type,
}) => {
    return (
        <Link to={{
          pathname:`/movies/${id}`,
          data: [{media_type: media_type}]
        }}>
          <div className={cl.movie}>
            <div>
              <div>
                <div className={cl.img}>
                  <div className={cl.over__img_info}>
                    <button className={cl.more}>Show more</button>
                    <div className={cl.rating}>
                      <i className="far fa-star"/>
                      <span>
                      {rating === 0 ? "0" : rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img 
                      className={cl.movie__img} 
                      src={ img ? `${img_300}/${img}` : unavailable} 
                      alt={title}
                    />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className={cl.title}>{title}</div>
            <div className={cl.year}>{year}</div>
        </div>
      </Link>
    )
}

export default MovieItem