import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import cl from './MovieFilter.module.css'


const MovieFilter = ({filter, setFilter}) => {
  return (
    <div className={cl.search__wrap}>
      <MyInput 
          value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value})}
          placeholder="поиск"
        />
        {/* <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Сортировка по"
          options={[
            { value: 'year', name: 'Год выпуска(сначала новые)'}
          ]}
        /> */}
    </div>
  );
};

export default MovieFilter;