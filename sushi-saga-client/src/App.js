import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import SushiWallet from "./containers/SushiWallet";
import Table from "./containers/Table";
// import Sushi from "./components/Sushi";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushiList: [],
    sushiStartIndex: 0,
    sushiEatenId: null,
    emptyPlatesArray: [],
    remainingMoney: 100
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          sushiList: data
        })
      );
  }

  handleClickPlate = sushi => {
    const { emptyPlatesArray, remainingMoney } = this.state;

    if (remainingMoney - sushi.price >= 0 && sushi.img_url) {
      // update sushi eaten id
      this.setState({
        sushiEatenId: sushi.id
      });

      // update empty plates array
      this.setState({
        emptyPlatesArray: [...emptyPlatesArray, sushi.id]
      });

      // update remaining money
      this.setState({
        remainingMoney: remainingMoney - sushi.price
      });
    }
  };

  handleClickMoreSushi = () => {
    const { sushiStartIndex } = this.state;
    if (sushiStartIndex === 96) {
      {
        this.setState({ sushiStartIndex: 0 });
      }
    } else {
      this.setState({
        sushiStartIndex: sushiStartIndex + 4
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      remainingMoney:
        this.state.remainingMoney + parseInt(event.target[0].value, 10)
    });
  };

  updateSushiList = () => {
    const { sushiEatenId, sushiList } = this.state;
    if (sushiEatenId) {
      return sushiList.map(sushi => {
        if (sushi.id === sushiEatenId) {
          sushi.img_url = "";
          return sushi;
        } else {
          return sushi;
        }
      });
    } else {
      return sushiList;
    }
  };

  displaySushis = () => {
    const { sushiStartIndex } = this.state;
    const sushiArray = this.updateSushiList();
    return sushiArray.slice(sushiStartIndex, sushiStartIndex + 4);
  };

  render() {
    return (
      <div className="app">
        <SushiWallet handleSubmit={this.handleSubmit} />
        <SushiContainer
          sushiList={this.displaySushis()}
          handleClickPlate={this.handleClickPlate}
          handleClickMoreSushi={this.handleClickMoreSushi}
        />
        <Table
          emptyPlatesArray={this.state.emptyPlatesArray}
          remainingMoney={this.state.remainingMoney}
        />
      </div>
    );
  }
}

export default App;
