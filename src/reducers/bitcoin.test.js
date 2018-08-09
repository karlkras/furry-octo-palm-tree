import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

/* global expect */
describe('bitcoinReducer', () => {
    const bitcoinData = { bpi: 'bitcoin price index' };
    
    it('fetches and sets the bitcoin data', () => {
        const actionType = { type: FETCH_BITCOIN, bitcoin: bitcoinData };
        expect(bitcoinReducer({}, actionType)).toEqual(bitcoinData);
    });
    
});