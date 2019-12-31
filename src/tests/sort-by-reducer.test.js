import { sortByReducer } from '../reducers/sort-by-reducer'
import { GET_SORT_TYPE } from '../constants';
import { sortBy } from '../services';

const sortType = "Test sortType";
const action = { type: GET_SORT_TYPE, sortType: sortType }

test('Should handle initial state', () => {
    expect(sortByReducer(undefined, {})).toEqual(sortBy.RELEASE_DATE)
})

test('Should handle GET_SORT_TYPE', () => {
    expect(sortByReducer(undefined, action)).toEqual(sortType);
})