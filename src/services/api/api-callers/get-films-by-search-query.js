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

export const generateUrl = (searchParams) => {
  let queryString = Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value.toLowerCase()}`)
    .join('&');
  queryString = queryString.replace('raiting', 'vote_average');
  if (!queryString.includes('genres')) {
    queryString = queryString.replace('genre', 'genres');
  }
  return `${FILMS_BY_ID_PATH}?${queryString}`;
}

export const getFilmsByQuery = (searchParams) => {
  const url = generateUrl(searchParams) + '&sortOrder=desc';
  console.log(url);
  return request(url);
};
