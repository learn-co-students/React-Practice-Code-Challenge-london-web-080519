import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis : [], 
    counter : 0, 
    balance: 100, 
    sushisEaten: []
  }

  onMoreButtonClick = () => {
    this.setState({ counter: this.state.counter + 4})
  }

  onSushiClick = (sushi) => {
    this.setState({sushisEaten: [...this.state.sushisEaten, sushi.id]}, {balance: this.state.balance - sushi.price})
  }

  handleSubmit = (event, amount) => {
    event.preventDefault(); 
    this.setState({balance : this.state.balance + amount})
  }

  componentDidMount() {
    fetch(API).then(resp=>resp.json()).then(sushis => this.setState({ sushis }))
  }
 
  
  getSushis = () => {
    let nextSushis = this.state.sushis.slice(this.state.counter, this.state.counter + 4)
    return nextSushis
  }


  render() {

    const sushis =this.getSushis()
    return (
      <div className="app">
        <SushiContainer  balance={this.state.balance} sushisEaten={this.state.sushisEaten} appSushiClick={this.onSushiClick} onMoreButtonClick={this.onMoreButtonClick} sushis={sushis} />
        <Table handleSubmit={this.handleSubmit} sushisEaten={this.state.sushisEaten} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;