import { FETCH_BITCOIN, BITCOIN_URL_BASE } from './constants';

/* global fetch */
export const fetchBitcoin = () => {
    return dispatch => {
        return fetch(`${BITCOIN_URL_BASE}currentprice.json`)
        .then(response => response.json())
        .then(json => dispatch ({ type: FETCH_BITCOIN, bitcoin: json }));
    };
};