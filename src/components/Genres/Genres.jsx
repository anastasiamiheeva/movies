import axios from 'axios';
import React, { useEffect } from 'react';
import { Chip } from "@material-ui/core";
import cl from "./Genres.module.css"

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  },[])


  return (
    <div className={cl.genres}>
      {selectedGenres.length > 0 && selectedGenres.map((genre) => (
        <Chip
        style={{margin: 2}}
        size='small'
        label={genre.name}
        key={genre.id}
        clickable
        onDelete={() => handleRemove(genre)}
      />
      ))}
      { genres.length > 0 && genres.map((genre) => (
        <Chip
        style={{margin: 2}}
        size='small'
        label={genre.name}
        key={genre.id}
        clickable
        onClick={() => handleAdd(genre)}
      />
      ))}
    </div>
  );
};

export default Genres;