import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';



const SearchForm = ({movies}) => {
    const [value, setValue] = useState('')
    
    
    
    const handleChange = e => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const searchMovie = e => {
        e.preventDefault()

    }

    const filteredMovies = movies.filter(movie => {
        return movie.title_long.toLowerCase().includes(value.toLowerCase())
    })

    // const searchMovie = (e) => {
    //     e.preventDefault()
    //     console.log(e)
    //     setSearchQuery('')
    // }

    return (
        <form>
            <MyInput
                onChange={handleChange}
                type="text" 
                placeholder="Поиск..."
            />
            <MyButton >Найти фильм</MyButton>
      </form>
    );
};

export default SearchForm;