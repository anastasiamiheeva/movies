import React, { useState } from "react";
import { img_300, unavailable } from "../../config/config";
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
      <ContentModal id={id} media_type={media_type} year={year}>
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
      </ContentModal>
    )
}

export default MovieItem