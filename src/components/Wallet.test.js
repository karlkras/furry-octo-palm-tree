import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const props = { balance: 20 };
    const wallet = shallow (<Wallet {...props}/>);
    
    /* global expect */
    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });
    
    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });
    
    it('creates an input to depost into or withdrawl from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });
    
    describe('when the user types into the wallet input', () => {
        const userBalance = '25';
        
        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance } });
        });
        
        it('updates the local wallet balance in the `state` and converts it into a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });
    });
});