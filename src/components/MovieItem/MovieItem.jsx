import React, { useState } from "react";
import cl from './MovieItem.module.css'
import Img from "../Img/Img";
import ContentModal from "../UI/ContentModal/ContentModal";
import MoviePage from "../../pages/MoviePage/MoviePage";

const MovieGenre = ({ genre }) => {
    return (
        <div className={cl.movie__genre}>
            <span>{genre}</span>
        </div>
    );
};

const MovieItem = (props) => {
  const [modal, setModal] = useState(false);

    return (
    <>
      <ContentModal visible={modal} setVisible={setModal}>
        <MoviePage id={props.id}/>
      </ContentModal>
        <div className={cl.movie}>
          <div>
            <div>
              <div className={cl.img}>
                <div className={cl.over__img_info}>
                  <button className={cl.more} onClick={() => setModal(true)}>Show more</button>
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