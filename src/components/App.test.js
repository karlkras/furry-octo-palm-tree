import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow (<App />);
    
    /* global expect */
    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('contains a wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
});