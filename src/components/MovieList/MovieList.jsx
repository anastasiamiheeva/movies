import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import classes from "./MovieList.module.css"



const MovieList = ({movies, remove}) => {
    if(!movies.length) {
        return (
            <h1 style={{textAlign:'center'}}>Movies not found</h1>
        )
    }
    return (
        <div className={classes.wrap}>
            <div className={classes.movieItem__wrap}>
                {movies.map(movie => 
                    <MovieItem
                        key ={movie.id}
                        title={movie.title}
                        img={movie.medium_cover_image}
                        genres={movie.genres}
                        year={movie.year}
                        rating={movie.rating}
                        remove={remove}
                        movie={movie}
                    />
                    )} 
            </div>
        </div>
    )
}

export default MovieList