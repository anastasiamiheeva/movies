import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Genres from '../../components/Genres/Genres';
import MovieItem from '../../components/MovieItem/MovieItem';
import Pagination from '../../components/Pagination/Pagination';
import { getModGenres } from '../../utils/genres';
import cl from "./Movies.module.css"



function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genresIdToString = getModGenres(selectedGenres)
  
  const fetchMovies = async() => {
   const {data} = await axios.get(
  `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresIdToString}`)
   setContent(data.results)
   setTotalPages(data.total_pages)
   console.log(data.results)
  }

  useEffect(() => {
    fetchMovies()
    // eslint-disable-next-line
  }, [page, genresIdToString])


  return (
    <div>
      <Genres 
        type="movie"
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <div className={cl.movies}>
        {
          content && content.map(movie => (
            <MovieItem
            key={movie.id}
            title={movie.title || movie.name}
            img={movie.poster_path}
            genres={movie.genre_ids}
            year={movie.release_date || movie.first_air_date}
            rating={movie.vote_average}
            id={movie.id}
            media_type="movie"
            />
          ))
        } 
      </div>
      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
      )}
    </div>
    
  );
}

export default Movies;