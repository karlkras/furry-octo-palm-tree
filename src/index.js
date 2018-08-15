import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/App'; 

render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))} >
        <App />
    </Provider>,
    document.getElementById('root')
);

