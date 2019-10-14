import React, { Component } from 'react';

class NavBar extends Component {
    
    state = {
        moneyInput: null
    }

    handleChange = e => {
        this.setState({
            moneyInput: e.target.value.replace(/\D/,'')
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addToCustomerMoney(this.state.moneyInput)
    }

    render() {
        return (
            <div class="navbar">
                <form onSubmit={this.handleSubmit}>
                    <h3>Add money to your Wallet</h3>
                    <input value={this.state.moneyInput} onChange={this.handleChange} placeholder="100"/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }
}

export default NavBar;