import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import AddMoney from "./components/AddMoney";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { sushiList: [], page: 1, balance: 100 };
	}

	componentDidMount() {
		fetch(API)
			.then(resp => resp.json())
			.then(sushiList =>
				this.setState({
					sushiList: sushiList.map(sushi => {
						sushi.isEaten = false;
						return sushi;
					}),
				}),
			);
	}

	handleEatingSushi = sushi => {
		if (this.state.balance >= sushi.price) {
			this.setState({
				sushiList: this.state.sushiList.map(sushiItem => {
					if (sushiItem.id === sushi.id) {
						sushiItem.isEaten = true;
						return sushiItem;
					} else {
						return sushiItem;
					}
				}),
			});

			this.setState({ balance: this.state.balance - sushi.price });
		} else {
			alert("You don't have enough money for this!");
		}
	};

	changeSushi = () => {
		this.setState({ page: this.state.page === 25 ? 1 : ++this.state.page });
	};

	reduceSushiByPage = () => {
		return this.state.sushiList.filter(sushi => {
			return (
				sushi.id > (this.state.page - 1) * 4 && sushi.id <= this.state.page * 4
			);
		});
	};

	eatenSushi = () => {
		return this.state.sushiList.filter(sushi => sushi.isEaten);
	};

	addMoney = value => {
		this.setState({ balance: this.state.balance + value });
	};

	render() {
		return (
			<div className="app">
				<SushiContainer
					sushiList={this.reduceSushiByPage()}
					eatSushi={this.handleEatingSushi}
					moreSushi={this.changeSushi}
				/>
				<Table eatenSushi={this.eatenSushi()} balance={this.state.balance} />
				<AddMoney addMoney={this.addMoney} />
			</div>
		);
	}
}

export default App;
