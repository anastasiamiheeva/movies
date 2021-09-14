import React from "react";
import MyButton from "../UI/button/MyButton";
import classes from './MovieItem.module.css'
import img from '../../img/noPhoto.png'

const MovieGenre = ({ genre }) => {
    return (
        <div className={classes.movie__genre}>
            <span>{genre}</span>
        </div>
    );
  };

const MovieItem = (props) => {
    return (
        <div className={classes.movie}>
            <div className={classes.movie__info}>
                
                <div className={classes.movie__img_wrap}>
                    {!props.img
                        ?<img className={classes.movie__img} src={img} alt={props.title}/>
                        :<img className={classes.movie__img} src={props.img} alt={props.title}/>
                    
                    }
                    
                </div>
                <div className={classes.movie__title}>{props.title}</div>
                <div>
                    <div className={classes.movie__rating}><i className="far fa-star"/> {props.rating}</div>
                    <div className={classes.movie__year}>{props.year}</div>
                </div>

                <div className={classes.movie__genre_wrap}>

                    {!props.genres
                    ? <div></div>
                    : props.genres.map((genre, index)=> 
                    <MovieGenre key={index} genre={genre}/>
                )
                }
                </div>
            </div>
            <div className={classes.movie__btns_wrap}>
                <MyButton className={classes.movie__btn}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.movie)}>Удалить</MyButton>
            </div>
        </div>
    )
}

export default MovieItem