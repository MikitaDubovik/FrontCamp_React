import { searchByReducer } from '../reducers/search-by-reducer'
import { GET_SEARCH_TYPE } from '../constants';
import { searchBy } from '../services'

const searchType = 'Test searchType';

const action = { type: GET_SEARCH_TYPE, searchType: searchType }

test('Should handle initial state', () => {
    expect(searchByReducer(undefined, {})).toEqual(searchBy.TITLE)
})

test('Should handle GET_SEARCH_TYPE', () => {
    expect(searchByReducer(undefined, action)).toEqual(searchType);
})