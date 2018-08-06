import balanceReducer from './balance';
import * as constants from '../actions/constants';

/* global expect */
describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const actionType = { type: constants.SET_BALANCE, balance}
        
        expect(balanceReducer(undefined, actionType)).toEqual(balance);
    });
    
});