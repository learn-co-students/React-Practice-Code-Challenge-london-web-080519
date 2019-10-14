import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    money: 200,
    display: 0
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState( {sushis:data}))
  }

  showFourSushis() {
    return this.state.sushis.slice(this.state.display, this.state.display + 4)
  }

  eat = (sushi) => {
    const moneyLeft = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && moneyLeft >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: moneyLeft
      })
    }
  }


showMore = () => {
  // console.log(props)
  this.setState({
    display: this.state.display + 4
  })
}


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.showFourSushis()}
                        display={this.state.display}
                        showMore={this.showMore}
                        eat={this.eat}
                        eaten={this.state.eaten} 
                        />
        <Table moneyLeft={this.state.money}
               eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
