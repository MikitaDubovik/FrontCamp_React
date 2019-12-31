import { filmDetailsReducer } from '../reducers/films-details-reducer'
import { ADD_FILM_WITH_DETAILS } from '../constants';
import { filmsData } from '../containers/mock-data'

const action = { type: ADD_FILM_WITH_DETAILS, filmWithDetails: filmsData[0] }

test('Should handle initial state', () => {
    expect(filmDetailsReducer(undefined, {})).toEqual({})
})

test('Should handle ADD_FILM_WITH_DETAILS', () => {
    expect(filmDetailsReducer(undefined, action)).toMatchObject(action.filmWithDetails);
})