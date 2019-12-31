export const Routes = {
  home: '/',
  filmDetail: '/film/:filmId',
  error: '/error',
  search: '/search/:query'
};

export const generatePathToFilmDetails = (filmId) => `/film/${filmId}`;
