import {
  ADD_FILMS_COMPLETED,
  ADD_FILMS_ERROR,
  ADD_FILMS_START,
  CLEAR_TEXT_INPUT_VALUE,
  GET_TEXT_INPUT_VALUE,
  GET_SEARCH_TYPE,
  GET_SORT_TYPE,
} from '../constants';

export const getFilmsStart = () => ({
  type: ADD_FILMS_START,
  isLoading : true
});

export const getFilmsCompleted = (films) => ({
  type: ADD_FILMS_COMPLETED,
  films,
  isLoading: false
});

export const getFilmsError = () => ({
  type: ADD_FILMS_ERROR,
  error: true,
  isLoading: false
});

// text input field
export const getTextInputValue = (textInputValue) => ({
  type: GET_TEXT_INPUT_VALUE,
  textInputValue,
});

export const clearTextInputValue = () => ({
  type: CLEAR_TEXT_INPUT_VALUE,
  textInputValue: '',
});

// search by tab button
export const getSearchType = (searchType) => ({
  type: GET_SEARCH_TYPE,
  searchType,
});

// sort by tab button
export const getSortType = (sortType) => ({
  type: GET_SORT_TYPE,
  sortType,
});
