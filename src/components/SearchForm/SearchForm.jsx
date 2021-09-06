import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const searchMovie = (e) => {
        e.preventDefault()
        setSearchQuery('')
    }

    return (
        <form>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                type="text" 
                placeholder="Поиск..."
            />
            <MyButton onClick={searchMovie}>Найти фильм</MyButton>
      </form>
    );
};

export default SearchForm;