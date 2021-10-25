const useGenres = (selectedGenres) => {
  
  if(selectedGenres.length < 1) return '';

  const GenresId = selectedGenres.map((genre) => genre.id);
  return GenresId.reduce((acc, current) => acc+ ',' + current)
}

export default useGenres;