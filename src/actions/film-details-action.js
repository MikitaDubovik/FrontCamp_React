import { ADD_FILM_WITH_DETAILS_COMPLETED, ADD_FILM_WITH_DETAILS_START, ADD_FILM_WITH_DETAILS_ERROR } from '../constants';

export const getFilmDetailsStart = () => ({
  type: ADD_FILM_WITH_DETAILS_START,
  isLoading : true
});


export const getFilmDetailsCompleted = (filmWithDetails) => ({
  type: ADD_FILM_WITH_DETAILS_COMPLETED,
  filmWithDetails,
  isLoading : false
});

export const getFilmDetailsError = () => ({
  type: ADD_FILM_WITH_DETAILS_ERROR,
  error : true,
  isLoading : false
});
