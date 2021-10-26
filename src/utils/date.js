export const getYearFromDate = (date) => {
  if(typeof date !== 'string') return ' '
   const parts = date.split('-')
   return parts[0]
}