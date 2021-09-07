import React, { useEffect, useState } from 'react'
import '../src/styles/App.css'
import MovieFilter from './components/MovieFilter/MovieFilter'
import MovieList from './components/MovieList/MovieList'
import MyButton from './components/UI/button/MyButton'
import Header from './components/Header/Header'
import { useMovies } from './hooks/useMovies'
import MovieService from './API/MovieService'
import Loader from './components/UI/Loader/Loader'
import { useFetching } from './hooks/useFetching'
import { getPageCount, getPagesArray } from './utils/pages'


function App() {
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(50)
  const [page, setPage] = useState(1)
  const sortedAndSearchedMovies = useMovies(movies, filter.sort, filter.query)
  let pagesArray = getPagesArray(totalPages)

  console.log(pagesArray)

  const [fetchMovies, isMoviesLoading, movieError ] = useFetching(async () => {
    const response = await MovieService.getAll(limit, page)
    setMovies(response.movies)
    const totalCount = response.movie_count;
    setTotalPages(getPageCount(totalCount,limit))
  })
  
  useEffect(() => {
    fetchMovies();
  }, [])
 
  const removeMovie = (movie) => {
    setMovies(movies.filter(m => m.id !== movie.id))
  }
  
  return (
    <div className="App">
      <Header />
      <MovieFilter filter={filter} setFilter={setFilter} />
      {/* {movieError && 
        <h1 style={{textAlign:'center', color: 'red'}}>Error: {movieError}</h1>
      } */}
      {isMoviesLoading 
        ? <Loader/>
        : <MovieList 
        remove={removeMovie} 
        movies={sortedAndSearchedMovies}
        />
      
      }
      {pagesArray.map( p => 
        <MyButton>{p}</MyButton>
      )}  
    </div>
  );
}

export default App;
