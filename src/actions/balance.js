import { SET_BALANCE, DEPOSIT, WITHDRAWAL } from './constants';

export const setBalance = balance => {
    return {
        type: SET_BALANCE,
        balance
    }
};

export const deposit = deposit => {
    return {
        type: DEPOSIT,
        deposit
    }
}

export const withdraw = withdrawal => {
    return {
        type: WITHDRAWAL,
        withdrawal
    }
}