import React from "react";
import MyButton from "../UI/button/MyButton";
import classes from './MovieItem.module.css'
import Img from "../Img/Img";
import { useHistory } from "react-router";

const MovieGenre = ({ genre }) => {
    return (
        <div className={classes.movie__genre}>
            <span>{genre}</span>
        </div>
    );
};

const MovieItem = (props) => {
    const router = useHistory()
    return (
        <div className={classes.movie}>
            <div className={classes.movie__info}>
                <Img img={props.img} title={props.title}/>

                <div className={classes.movie__title}>{props.title}</div>
                <div>
                    <div className={classes.movie__rating}><i className="far fa-star"/> {props.rating}</div>
                    <div className={classes.movie__year}>{props.year}</div>
                </div>

                <div className={classes.movie__genre_wrap}>
                    {!props.genres
                    ? <div></div>
                    : props.genres.slice(0,3).map((genre, index)=> 
                    <MovieGenre key={index} genre={genre}/>
                )
                }
                </div>
            </div>
            <div className={classes.movie__btns_wrap}>
                <MyButton onClick={() => router.push(`/movies/${props.id}`) } className={classes.movie__btn}>Открыть</MyButton>
            </div> 
        </div>
    )
}

export default MovieItem