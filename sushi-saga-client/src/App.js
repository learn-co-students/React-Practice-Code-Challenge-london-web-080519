import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
      this.state={
        sushis: [],
        moneyLeft: 100,
        index: 0, 
        plates: []
    }
  }

  get = (url) => {
    return fetch(url).then(response => response.json())
  }

  componentDidMount() {
    this.get(API).then(sushisList => this.setState({sushis: sushisList}))
  }

  // always just set the index to itself, plus 4 (only want 4 sushis at a time)
  increaseIndex = () => this.setState({ index: this.state.index + 4 })

  // the selection is (start) the sushis index, plus (end) the next 4 along
  getSelection = () => {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }


  handleEaten = (yum) => {
    if (yum.price > this.state.moneyLeft) {
      alert("You don't have enough money for that sushi")
    } else {
        this.setState({
        plates: [...this.state.plates, yum],
        moneyLeft: this.state.moneyLeft-yum.price,
        index: this.state.index
      })
    }
  }

  render() {
    const renderSushis = this.getSelection()
    return (
      <div className="app">
        <SushiContainer sushis={renderSushis} plates={this.state.plates} increaseIndex={this.increaseIndex} handleEaten={this.handleEaten} />
        <Table moneyLeft={this.state.moneyLeft} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;