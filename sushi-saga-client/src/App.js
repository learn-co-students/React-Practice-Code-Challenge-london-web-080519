import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    firstSelectedSushi: 0,
    eatenSushisIds: [],
    moneyLeft: 100
  }

  componentDidMount() {
    fetch(API).then(response => response.json())
    .then(sushis => this.setState({sushis}))
  }

  sushisToDisplay = () => {
    return this.state.sushis.slice(this.state.firstSelectedSushi, this.state.firstSelectedSushi + 4)
  }

  handleConsumption = (sushi) => {
    if (this.state.moneyLeft >= sushi.price) {
      console.log(`${sushi.name} was eaten!`)
      this.setState({eatenSushisIds: [...this.state.eatenSushisIds, sushi.id],
        moneyLeft: this.state.moneyLeft - sushi.price})
      } else {
        console.log(`Not enough money!!`) 
    }
  }

  handleMoreSushi = () => {
    console.log("more sushi demanded!")
    let newSelected = this.state.firstSelectedSushi + 4
    if (newSelected + 4 > 99) {newSelected = 0}
    this.setState({firstSelectedSushi: newSelected})
  }

  addMoney = (amount) => {
    this.setState({moneyLeft: this.state.moneyLeft + amount})
  }

  render() {

    const sushisForContainer = this.sushisToDisplay()

    return (
      <div className="app">
        <SushiContainer sushis={sushisForContainer} eatenSushisIds={this.state.eatenSushisIds} handleConsumption={this.handleConsumption} handleMoreSushi={this.handleMoreSushi} addMoney={this.addMoney}/>
        <Table eatenSushisIds={this.state.eatenSushisIds} moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;