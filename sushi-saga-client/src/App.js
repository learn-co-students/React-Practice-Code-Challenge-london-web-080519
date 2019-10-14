import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import NavBar from './containers/NavBar';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushisEaten: [],
    currentPage: 1,
    customerMoney: 200
  }

  componentDidMount() {
    fetch(API).then(r => r.json())
    .then(sushis => {
      this.setState({
        sushis: [...sushis]
      })
    })
  }

  getCurrentPageOfSushi = () => {
    return this.state.sushis.slice((this.state.currentPage*4)-4, this.state.currentPage*4)
  }

  handleEatSushi = sushiToBeEaten => {
    if (this.state.customerMoney > sushiToBeEaten.price) {
      this.setState({
        sushisEaten: [...this.state.sushisEaten, sushiToBeEaten],
        customerMoney: this.state.customerMoney - sushiToBeEaten.price
      })
    }
  }
  
  moreButtonClick = () => {
    this.setState({
      currentPage: this.state.currentPage === 25 ? 1 : this.state.currentPage + 1
    })
  }

  addToCustomerMoney = amount => {
    this.setState({
      customerMoney: this.state.customerMoney + parseInt(amount)
    })
  }

  render() {
    let sushisOnCurrentPage = this.getCurrentPageOfSushi()
    
    return (
      <div className="app">
        <NavBar addToCustomerMoney={this.addToCustomerMoney} />
        <SushiContainer sushis={sushisOnCurrentPage} handleEatSushi={this.handleEatSushi} moreButtonClick={this.moreButtonClick} eatenSushis={this.state.sushisEaten}/>
        <Table customerMoney={this.state.customerMoney} eatenSushis={this.state.sushisEaten} />
      </div>
    );
  }
}

export default App;