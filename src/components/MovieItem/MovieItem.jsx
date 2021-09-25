import React from "react";
import cl from './MovieItem.module.css'
import Img from "../Img/Img";
import { Link } from "react-router-dom";

const MovieGenre = ({ genre }) => {
    return (
        <div className={cl.movie__genre}>
            <span>{genre}</span>
        </div>
    );
};

const MovieItem = (props) => {
    return (
    <>
      <div className={cl.movie}>
          <div>
            <div>
              <div className={cl.img}>
                <div className={cl.over__img_info}>
                  <Link className={cl.link} to={`/movies/${props.id}`}>
                    <div className={cl.more}>Show more</div>
                  </Link>
                  <div className={cl.rating}>
                    <i className="far fa-star"/>
                    <span>
                      {props.rating === 0 ? "0" : props.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className={cl.genres}>
                    {props.genres.slice(0,3).map((genre,index) => (
                      <MovieGenre key={index} genre={genre}/>
                    ))}
                  </div>
                </div>
                <Img img={props.img} alt={props.title}/>
              </div>
            </div>
          </div>
          <div className={cl.title}>{props.title}</div>
          <div className={cl.year}>{props.year}</div>
      </div>
    </>
    )
}

export default MovieItem