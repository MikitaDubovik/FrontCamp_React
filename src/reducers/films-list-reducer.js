import {
  ADD_FILMS_START, ADD_FILMS_COMPLETED, ADD_FILMS_ERROR
} from '../constants';

const initialfilmListReducer = [];

export const filmListReducer = function (state = initialfilmListReducer, action) {
  switch (action.type) {
    case ADD_FILMS_START:
      return state;
    case ADD_FILMS_COMPLETED:
      return [...action.films];
    case ADD_FILMS_ERROR:
      return state;
  }
  return state;
};
