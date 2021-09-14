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
  const [limit, setLimit] = useState(15)
  const [page, setPage] = useState(1)
  const sortedAndSearchedMovies = useMovies(movies, filter.sort, filter.query)
  let pagesArray = getPagesArray(totalPages)
  console.log(pagesArray)

  console.log(totalPages)
   //pagination
  const [numberLimit, setPageNumberLimit] = useState(6)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)

  const handleNextBtn = () => {
    setPage(page + 1)
    if(page + 1 >= maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + numberLimit)
      setMinPageNumberLimit(minPageNumberLimit + numberLimit)
    }
    
  }
  const handlePrevBtn = () => {
    setPage(page - 1)
    if(page - 1 < minPageNumberLimit) {
      setMinPageNumberLimit(minPageNumberLimit - numberLimit)
      setMaxPageNumberLimit(maxPageNumberLimit - numberLimit)
    }
  }

  let pageIncrementBtn = null;
  if(totalPages > maxPageNumberLimit) {
    pageIncrementBtn = <li className="page" onClick={handleNextBtn}>&hellip;</li>
  }
  
  let pageDecrementBtn = null;
  if(minPageNumberLimit > 1) {
    pageDecrementBtn = <li className="page" onClick={handlePrevBtn}>&hellip;</li>
  }


  const [fetchMovies, isMoviesLoading, movieError ] = useFetching(async () => {
    const response = await MovieService.getAll(limit, page)
    setMovies(response.movies)
    const totalCount = response.movie_count;
    setTotalPages(getPageCount(totalCount,limit))
  })

  
  useEffect(() => {
    console.log(page)
    // fetchMovies(limit, page);
    fetchMovies()
  }, [page])

  const changePage = (page) => {
    setPage(page)
    // fetchMovies(limit, page); 
  }
 
  const removeMovie = (movie) => {
    setMovies(movies.filter(m => m.id !== movie.id))
  }
  
  return (
    <div className="App">
      <Header />

      {/*//////////////////// */}
      <ul className="page__wrapper">
        <li>
            <button 
            disabled={page === pagesArray[0] ? true : false}
            onClick={handlePrevBtn}
            className="page__button"
          >
            Prev
          </button>
        </li> 
        {pageDecrementBtn}
        {pagesArray.map( p => 
          p < maxPageNumberLimit && p >= minPageNumberLimit
          ?  <li 
                className={page === p ? 'page page__current' : 'page'}
                key={p}
                onClick={() => changePage(p)}
              >
                {p}
              </li>
          : null
        )}
        {pageIncrementBtn}
        <li>
          <button 
              disabled={page === pagesArray[pagesArray.length - 1] ? true : false}
              className="page__button"
              onClick={handleNextBtn}
          >Next</button>
        </li>
      </ul>
      {/*/////////////////// */}

      <MovieFilter filter={filter} setFilter={setFilter} />
      {movieError && 
        <h1 style={{textAlign:'center', color: 'red'}}>Error: {movieError}</h1>
      }
      {isMoviesLoading 
        ? <Loader/>
        : <MovieList 
        remove={removeMovie} 
        movies={sortedAndSearchedMovies}
        />
      }
    </div>
  );
}

export default App;
