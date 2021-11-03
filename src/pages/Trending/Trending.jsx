import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import Pagination from '../../components/Pagination/Pagination';
import cl from "./Trending.module.css"

const Trending = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const fetchTrending = async () => {
  const { data } = await axios.get(
    // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );
  setContent(data.results);
};

  useEffect(() => {
    fetchTrending()
    // eslint-disable-next-line
  }, [page])

  return (
    <div>
      <span className='pageTitle'>Trending today</span>
      <div className={cl.trending}>
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
            media_type={movie.media_type}
            />
          ))
        }
      </div>
      <Pagination page={page} setPage={setPage}/>
    </div>
  );
};

export default Trending;