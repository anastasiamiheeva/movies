import React, { useMemo, useState } from 'react'
import '../src/styles/App.css'
import axios from 'axios'
import MovieFilter from './components/MovieFilter/MovieFilter'
import MovieList from './components/MovieList/MovieList'
import MyButton from './components/UI/button/MyButton'
import Header from './components/Header/Header'


function App() {
  const [movies, setMovies] = useState([
    {id: 35239, url: "https://yts.mx/movies/fighting-for-the-motherland-2020",rating: 4.6, genres: ["Drama"], year: 2021, medium_cover_image: "https://yts.mx/assets/images/movies/fighting_for_the_motherland_2020/medium-cover.jpg", title: "Fighting for the Motherland", title_english: "Fighting for the Motherland"},
    {id: 35238, url: "https://yts.mx/movies/superhost-2021",rating: 4.4, year: 2018, genres: ["Horror", "Mystery"],  medium_cover_image: "https://yts.mx/assets/images/movies/superhost_2021/medium-cover.jpg", title: "Superhost", title_english: "Superhost"},
    {id: 35235, url: "https://yts.mx/movies/spies-of-warsaw-2013",rating: 5, genres: ["Drama", "History", "War"], year: 2019, medium_cover_image: "https://yts.mx/assets/images/movies/spies_of_warsaw_2013/medium-cover.jpg", title: "Spies of Warsaw", title_english: "Spies of Warsaw"},
  ])

  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('')

  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedMovies = useMemo(() => {
    console.log('отработала функция getSortedMovies');
    if(filter.sort) {
      return [...movies].sort((a,b) => b[filter.sort] - a[filter.sort])
    }
    return movies
  }, [filter.sort, movies])

  const sortedAndSearchedMovies = useMemo(() => {
    return sortedMovies.filter(movie => movie.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedMovies])
 
  
  async function fetchMovies() {
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json')
    //const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data.data.movies);
  }
 
  const removeMovie = (movie) => {
    setMovies(movies.filter(m => m.id !== movie.id))
  }
  
  return (
    <div className="App">
      <Header />
      <MovieFilter filter={filter} setFilter={setFilter} />
      <MovieList 
          remove={removeMovie} 
          movies={sortedAndSearchedMovies}
      />
      <MyButton onClick={fetchMovies}>request</MyButton>
        
    </div>
  );
}

export default App;
