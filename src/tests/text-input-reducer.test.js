import { textInputReducer } from '../reducers/text-input-reducer'
import { GET_TEXT_INPUT_VALUE, CLEAR_TEXT_INPUT_VALUE } from '../constants';

const textInputValue = "Test textInputValue";
const actionGET_TEXT_INPUT_VALUE = { type: GET_TEXT_INPUT_VALUE, textInputValue: textInputValue };
const actionCLEAR_TEXT_INPUT_VALUE = { type: CLEAR_TEXT_INPUT_VALUE, textInputValue: textInputValue };

test('Should handle initial state', () => {
    expect(textInputReducer(undefined, {})).toEqual('')
})

test('Should handle GET_TEXT_INPUT_VALUE', () => {
    expect(textInputReducer(undefined, actionGET_TEXT_INPUT_VALUE)).toEqual(textInputValue);
})

test('Should handle CLEAR_TEXT_INPUT_VALUE', () => {
    expect(textInputReducer(undefined, actionCLEAR_TEXT_INPUT_VALUE)).toEqual(textInputValue);
})