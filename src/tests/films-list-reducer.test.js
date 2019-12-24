import { filmListReducer } from '../reducers/films-list-reducer'
import { ADD_FILMS } from '../constants';
import { filmsData } from '../containers/mock-data'

const action = { type: ADD_FILMS, films: filmsData }

test('Should handle initial state', () => {
    expect(filmListReducer(undefined, {})).toEqual([])
})

test('Should handle ADD_FILMS', () => {
    expect(filmListReducer(undefined, action)).toMatchObject(action.films);
})