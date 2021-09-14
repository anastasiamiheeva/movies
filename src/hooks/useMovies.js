import { useMemo } from "react";

export const useSortedMovies = (movies, sort) => {
  const sortedMovies = useMemo(() => {
    if(sort) {
      return [...movies].sort((a,b) => b[sort] - a[sort])
    }
    return movies
  }, [sort, movies])
  return sortedMovies;
}

export const useMovies = (movies, sort, query) => {
  const sortedMovies = useSortedMovies(movies, sort)
  const sortedAndSearchedMovies = useMemo(() => {
    return sortedMovies.filter(movie => movie.title.toLowerCase().startsWith(query.toLowerCase()))
  }, [query, sortedMovies])
  return sortedAndSearchedMovies;
}