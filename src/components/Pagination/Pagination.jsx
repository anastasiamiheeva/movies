import React, { useState } from 'react';
import { getPagesArray } from '../../utils/pages';
import cl from './Pagination.module.css'

const Pagination = ({totalPages, page, setPage}) => {
  let pagesArray = getPagesArray(totalPages)

  const changePage = (page) => {
    setPage(page)
    window.scroll(0,0)
  }
  
  const [numberLimit, setPageNumberLimit] = useState(6)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(7)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)

  const handleToTheEnd = () => {
    setPage(totalPages)
    setMaxPageNumberLimit(totalPages + 1)
    setMinPageNumberLimit(totalPages - numberLimit)
  }


  const handleToTheStart = () => {
    setPage(pagesArray[0])
    setMaxPageNumberLimit(7)
    setMinPageNumberLimit(1)
  }

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
    pageIncrementBtn = <li className={cl.page} onClick={handleNextBtn}>&hellip;</li>
  }
  
  let pageDecrementBtn = null;
  if(minPageNumberLimit > 1) {
    pageDecrementBtn = <li className={cl.page} onClick={handlePrevBtn}>&hellip;</li>
  }

  let pageToTheEndBtn = null;
  if(totalPages > maxPageNumberLimit) {
    pageToTheEndBtn = <li className={cl.page} onClick={handleToTheEnd}>&raquo;</li>
  }

  let pageToStartEndBtn = null;
  if(minPageNumberLimit > 1) {
    pageToStartEndBtn = <li className={cl.page} onClick={handleToTheStart}>&laquo;</li>
  }

  return (
    <div className={cl.pagination__wrap}>
      Pagination
      {/* <ul className={cl.page__wrapper}>
          <li>
              <button 
              disabled={page === pagesArray[0] ? true : false}
              onClick={handlePrevBtn}
              className={cl.page__button}
            >
              Prev</button>
          </li> 
          {pageToStartEndBtn}
          {pageDecrementBtn}
          {pagesArray.map( p => 
            p < maxPageNumberLimit && p >= minPageNumberLimit
            ?  <li 
                  className={page === p ? cl.page__current : cl.page}
                  key={p}
                  onClick={() => changePage(p)}
                >
                  {p}
                </li>
            : null
          )}
          {pageIncrementBtn}
          {pageToTheEndBtn}
          <li>
            <button 
                disabled={page === pagesArray[pagesArray.length - 1] ? true : false}
                className={cl.page__button}
                onClick={handleNextBtn}
            >Next</button>
          </li>
        </ul> */}
    </div>
  );
};

export default Pagination;