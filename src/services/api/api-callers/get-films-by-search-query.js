import { request } from '../../request';

export const searchBy = {
  GENRES: 'genres',
  TITLE: 'title',
};

export const sortBy = {
  RELEASE_DATE: 'release_date',
  RATING: 'vote_count',
};

const FILMS_BY_ID_PATH = 'https://reactjs-cdp.herokuapp.com/movies';

export const getFilmsByQuery = (searchParams) => {
  let queryString = Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value.toLowerCase()}`)
    .join('&');
  queryString = queryString.replace('raiting', 'vote_average');
  queryString = queryString.replace('genre', 'genres');
  const url = `${FILMS_BY_ID_PATH}?${queryString}&sortOrder=desc`;
  console.log(url);
  return request(url);
};
