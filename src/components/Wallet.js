import React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';


export class Wallet extends React.Component {
    constructor() {
        super();
        
        this.state = { 
            balance: undefined 
        };
    }
    
    updateBalance = evt => {
        const balance = parseInt(evt.target.value, 10);
        this.setState({balance});
    }
    
    onDeposit = () => {
        this.props.deposit(this.state.balance);
    };
    
    onWithdraw = () => {
        this.props.withdraw(this.state.balance);
    };
    
    render() {
        return (
            <div>
                <h3 className={'balance'} >Wallet balance: {this.props.balance}</h3>
                <br/>
                <input
                    className={'input-wallet'}
                    onChange={this.updateBalance}
                />
                <button className={'btn-deposit'} onClick={this.onDeposit} >Deposit</button>
                <button className={'btn-withdraw'} onClick={this.onWithdraw} >Withdraw</button>
            </div>
        );
    };
};

export default connect(state => { return {balance: state.balance} } , { deposit, withdraw })(Wallet);