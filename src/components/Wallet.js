import React from 'react';
import { connect } from 'react-redux';


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
    
    render() {
        return (
            <div>
                <h3 className={'balance'} >Wallet balance: {this.props.balance}</h3>
                <br/>
                <input
                    className={'input-wallet'}
                    onChange={this.updateBalance}
                />
            </div>
        );
    };
};

export default connect(state => { return {balance: state} } , null)(Wallet);