import balanceReducer from './balance';
import * as constants from '../actions/constants';

/* global expect */
describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const actionType = { type: constants.SET_BALANCE, balance };
        
        expect(balanceReducer(undefined, actionType)).toEqual(balance);
    });
    
    it('makes a deposit', () => {
        const deposit = 10;
        const initialBalance = 5;
        const actionType = { type: constants.DEPOSIT, deposit };
        
        expect(balanceReducer(initialBalance, actionType)).toEqual(deposit + initialBalance);
    });
    
    it('makes a withdrawal', () => {
        const withdrawal = 5;
        const initialBalance = 10;
        const actionType = { type: constants.WITHDRAWAL, withdrawal };
        
        expect(balanceReducer(initialBalance, actionType)).toEqual(initialBalance - withdrawal);
    });
    
});