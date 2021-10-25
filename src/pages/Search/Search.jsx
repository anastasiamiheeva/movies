import React, { useEffect, useState } from 'react';
import {
  Button,
  Tab,
  Tabs,
  TextField,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';
import cl from "./Search.module.css"
import MovieItem from '../../components/MovieItem/MovieItem';
import Pagination from '../../components/Pagination/Pagination';

const Search = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([])
  const [totalPages, setTotalPages] = useState();
 

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#008080",
      },
    },
  });
  

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [page]);


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display: 'flex'}}>
        <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search movies"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
          </div>
         
      </ThemeProvider>
      <div className={cl.search}>
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
      {totalPages > 1 && 
        <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
      }
      
    </div>
  );
};

export default Search;