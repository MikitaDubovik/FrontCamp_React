import { ADD_FILM_WITH_DETAILS_ERROR, ADD_FILM_WITH_DETAILS_COMPLETED, ADD_FILM_WITH_DETAILS_START } from '../constants';

const initialfilmDetailsReducer = {};

export const filmDetailsReducer = function (state = initialfilmDetailsReducer, action) {
  switch (action.type) {
    case ADD_FILM_WITH_DETAILS_START:
      return state;
    case ADD_FILM_WITH_DETAILS_COMPLETED:
      return { ...action.filmWithDetails };
    case ADD_FILM_WITH_DETAILS_ERROR:
      return state;
  }
  return state;
};
