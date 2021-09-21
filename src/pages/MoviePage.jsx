import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MovieService from '../API/MovieService';
import Img from '../components/Img/Img';
import MovieComents from '../components/MovieComments/MovieComents';
import MyInput from '../components/UI/input/MyInput';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';


const MovieGenre = ({ genre }) => {
  return (
      <div>
          <span>{genre}</span>
      </div>
  );
};

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [fetchMovieId, isLoading, error ] = useFetching(async () => {
    const response = await MovieService.getById(params.id)
    setMovie(response.movie)
  })
  
  useEffect(() => {
    fetchMovieId()
  }, [])

  return (
    <div>
      {isLoading 
        ? <Loader/>
        : <div>
            <div>
              <h1>{movie.title_long}</h1>
            </div>
            <div>
              {!movie.genres
                ? <div></div>
                : movie.genres.slice(0,3).map((genre, index)=> 
                <MovieGenre key={index} genre={genre}/>
                )
              }
            </div>
            <div>
            <Img img={movie.medium_cover_image} title={movie.title}/>
            </div>
            <div>
              <p>{movie.description_full}</p>
            </div>

            <MovieComents params={params}/>
              
          </div>
      }
    </div>
  );
};

export default MoviePage;