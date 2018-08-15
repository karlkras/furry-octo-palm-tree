import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN, BITCOIN_URL_BASE } from './constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index' } };

fetchMock.get(`${BITCOIN_URL_BASE}currentprice.json`, mockResponse);

/* global expect */
it('creates an async action to fetch the bitcoin value', () => {
    const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN}];
    
    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});





