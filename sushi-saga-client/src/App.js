import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiData: [],
    plateCount: [],
    amountLeft: 100,
    from: 0,
    to: 4
  }


  componentDidMount() {
    this.getSushi()
  }

  getSushi = () => {
    fetch(API).then(response => response.json()).then(sushis => this.setState({sushiData: sushis}))
  }

  updateDisplay = () => {
    let newFrom = this.state.from += 4
    let newTo = this.state.to += 4
    this.setState({
      from: newFrom,
      to: newTo
    }
    )
  }

addPlate = (price, id) => {

console.log(id)

if (this.state.amountLeft - price >=0){

    let currentData = this.state.sushiData

  let newData = currentData.map(sushi => {
      if (sushi.id === id){
        sushi.img_url = null;
        return sushi
      }else {return sushi}
    })

    let count = this.state.plateCount
    count.push(1)

    let amount = this.state.amountLeft
    amount -= price
    this.setState({
      sushiData: newData,
      plateCount: count,
      amountLeft: amount
    })
  }else{null}


  }
  
  render() {
    return (
      <div className="app">
       
        <SushiContainer  sushiData={this.state.sushiData} plateCount={this.addPlate} from={this.state.from} to={this.state.to} updateDisplay={this.updateDisplay}/>
        <Table money={this.state.amountLeft} plates={this.state.plateCount}/>
      </div>
    );
  }
}

export default App;