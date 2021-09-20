import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MovieService from '../API/MovieService';
import Img from '../components/Img/Img';
import MyInput from '../components/UI/input/MyInput';
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
  const [movie, setMovie] = useState({})
  
  console.log(params)
  const [fetchMovieId, isLoading, error ] = useFetching(async () => {
    const response = await MovieService.getById(params.id)
    console.log(response.movie)
    setMovie(response.movie)
  })
  
  useEffect(() => {
    fetchMovieId()
  }, [])

  return (
    <div>
      <div><h1>{movie.title_long}</h1></div>
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
      <div><p>{movie.description_full}</p></div>
      
      <div>
        <form
          // action=""
          // //onSubmit={(e) => handleSubmit(e)}
          // //onKeyDown={(e) => {
          //   // if (e.code === "Enter") {
          //   //   handleSubmit(e);
          //   // }
          // }}
        >
          <div>
            <div>
              <textarea
                name="new_comment"
                //value={comment}
                //onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div >
              <button type="submit">Click</button>
            </div>
          </div>
        </form>
      </div>
      
      
    </div>
  );
};

export default MoviePage;