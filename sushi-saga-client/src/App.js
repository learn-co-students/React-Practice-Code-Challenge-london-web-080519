import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis : [],
      moneyLeft: 100,
      pageNumber: 1,
      eatenSushi: [],
      number: 0
    }
  }

// --- handling more sushis --- //
  componentDidMount(){
    fetch(`${API}?_limit=4&_page=1`).then(resp=>resp.json().then(data=> this.setState({sushis: data})))
  }

  handleMoreClick = () => {
    console.log(this.state.pageNumber)
    fetch(`${API}?_limit=4&_page=${this.state.pageNumber}`).then(resp=>resp.json().then(data=> this.setState({sushis: data})))
  }

  updatePageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    }, this.handleMoreClick)
  }

// --- handling eating a sushi --- //

  handleSushiClick = (sushiId) => {
    let sushiToBuy = this.state.sushis.find(sushi => sushi.id === sushiId)
    console.log(sushiToBuy.price)
    if (this.state.moneyLeft >= sushiToBuy.price){
      this.setState({
        moneyLeft: this.state.moneyLeft - sushiToBuy.price
      }, () => this.updateEatenSushiArray(sushiId))
    }
  }

  updateEatenSushiArray = (sushiId) => {
    console.log(sushiId)
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiId]
    })
  }


  // --- handle extra money --- //

  updateMoneyLeft = (event)=> {
    event.preventDefault()
    this.setState({
      moneyLeft: this.state.moneyLeft + parseInt(event.target.money.value)
    })
  }

 // --- rendering --- //  
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} 
          handleSushiClick={this.handleSushiClick} 
          updatePageNumber={this.updatePageNumber}
          currentPageNumber={this.state.pageNumber}
          eatenSushi={this.state.eatenSushi}/>
        <Table moneyLeft={this.state.moneyLeft}
        sushis={this.state.sushis}
        eatenSushi={this.state.eatenSushi}
        updateMoneyLeft={this.updateMoneyLeft}/>
      </div>
    );
  }
}

export default App;