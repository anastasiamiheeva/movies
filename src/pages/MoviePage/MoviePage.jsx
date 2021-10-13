
import React, { useEffect, useState } from 'react';
import MovieService from '../../API/MovieService';
import Img from '../../components/Img/Img';
import MovieComents from '../../components/MovieComments/MovieComents';
import Loader from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getLSComments } from '../../localStorage/lSComments';
import cl from './MoviePage.module.css'


const MovieGenre = ({ genre }) => {
  return (
      <div>
          <span>{genre}</span>
      </div>
  );
};

// const MoviePage = ({ id }) => {
//   const [movie, setMovie] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [fetchMovieId, isLoading, error ] = useFetching(async () => {
//     const response = await MovieService.getById(id)
//     setMovie(response.movie)
//   })

//   useEffect(() => {
//     fetchMovieId()
//     const {lSCurrentMovie } = getLSComments(id);
//     setComments(lSCurrentMovie.comments)
//   }, [])

//   return (
//     <div className={cl.page_wrap}>
//       {isLoading 
//         ? <Loader/>
//         : <div className={cl.movie_page}>
//             <div className={cl.movie_info}>
//               <div className={cl.movie__img}>
//                 <Img img={movie.large_cover_image} alt={movie.title}/>
//                 <div className={cl.movie_genre}>
//                   {!movie.genres
//                     ? <div></div>
//                     : movie.genres.slice(0,3).map((genre, index)=> 
//                     <MovieGenre key={index} genre={genre}/>
//                     )
//                   }
//                 </div>
//               </div>
//               <div className={cl.movie_description}>
//                 <div className={cl.movie_title}>
//                   <h1>{movie.title_long}</h1>
//                 </div>
                
//                 <div className={cl.movie_about}>
//                   <p>{movie.description_full}</p>
//                 </div>
//                 <MovieComents setComments={setComments} comments={comments} id={id}/> 
//               </div>
//             </div>
            
//           </div>
//       }
//     </div>
//   );
// };

const MoviePage = ({ id }) => {
  const [movie, setMovie] = useState([]);
  const [fetchMovieId, isLoading, error ] = useFetching(async () => {
    const response = await MovieService.getById(id)
    setMovie(response.movie)
  })

  useEffect(() => {
    fetchMovieId()
  }, [])

  return (
      <div className={cl.page_wrap}>
      {isLoading 
        ? <Loader/>
        : <div className={cl.movie_page}>
            <div className={cl.movie_info}>
              <div className={cl.movie__img}>
                <Img img={movie.large_cover_image} alt={movie.title}/>
                <div className={cl.movie_genre}>
                  {!movie.genres
                    ? <div></div>
                    : movie.genres.slice(0,3).map((genre, index)=> 
                    <MovieGenre key={index} genre={genre}/>
                    )
                  }
                </div>
              </div>
              <div className={cl.movie_description}>
                <div className={cl.movie_title}>
                  <h1>{movie.title_long}</h1>
                </div>
                
                <div className={cl.movie_about}>
                  <p>{movie.description_full}</p>
                </div>
                <MovieComents movieId={id}/> 
              </div>
            </div>
            
          </div>
      }
    </div>
  );
};

export default MoviePage;