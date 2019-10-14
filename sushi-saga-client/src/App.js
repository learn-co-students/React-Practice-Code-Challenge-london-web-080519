import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';



// Endpoint!
const API = "http://localhost:3003/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    money: 100,
    emptyPlates: []

  }

  componentDidMount = () => {
    fetch("http://localhost:3003/sushis")
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis}))
  }
  
  eatSushi = (sushi) => {
    if (this.state.money >= sushi.price){
    this.setState({emptyPlates: [...this.state.emptyPlates, sushi]}), this.setState({money: this.state.money - sushi.price})}
  }
  
  moreSushi = () => {
    this.setState({index: this.state.index + 4})
  }

  render() {
    const sushiList = this.state.sushis.slice(this.state.index, this.state.index + 4)
    return (
      <div className="app" >
        <SushiContainer sushis={sushiList} moreSushi={this.moreSushi} eatSushi={this.eatSushi} emptyPlates={this.state.emptyPlates}/>
        <Table money={this.state.money} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;