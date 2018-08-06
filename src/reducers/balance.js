import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
    let newBalance;
    switch (action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        case constants.DEPOSIT:
            newBalance = action.deposit + state;
            return newBalance;
        case constants.WITHDRAWAL:
            newBalance = state - action.withdrawal;
            return newBalance;
        default: 
            return state;
    }
};

export default balance;