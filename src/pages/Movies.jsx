import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import MovieService from '../API/MovieService'
import Header from '../components/Header/Header'
import MovieList from '../components/MovieList/MovieList'
import Pagination from '../components/Pagination/Pagination'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
import '../styles/App.css'
import { getPageCount } from '../utils/pages'

function Movies() {
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  
  
  const [fetchMovies, isMoviesLoading, movieError ] = useFetching(async () => {
    const response = await MovieService.getAll(limit, page)
    setMovies(response.movies)
    const totalCount = response.movie_count;
    setTotalPages(getPageCount(totalCount,limit))
  })

  useEffect(() => {
    fetchMovies()
  }, [page])

  const changePage = (page) => {
    setPage(page)
  }
  
  return (
    <div className="App">
      <Header movies={movies}/>
      <Pagination
        changePage={changePage} 
        page={page} 
        setPage={setPage} 
        totalPages={totalPages}
      />
      {movieError && 
        <h1 style={{textAlign:'center', color: 'red'}}>Error: {movieError}</h1>
      }
      {isMoviesLoading 
        ? <Loader/>
        : <MovieList movies={movies}/>
      }
    </div>
  );
}

export default Movies;