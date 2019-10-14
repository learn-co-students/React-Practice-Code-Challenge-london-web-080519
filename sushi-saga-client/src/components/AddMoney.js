import React from "react";

class AddMoney extends React.Component {
	state = { value: "" };

	handleSubmission = event => {
		event.preventDefault();
		this.props.addMoney(this.state.value);
		this.setState({ value: "" });
	};

	changeMoney = event => {
		this.setState({ value: parseInt(event.target.value) });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmission}>
					<input
						type="text"
						value={this.state.value}
						name="money"
						onChange={this.changeMoney}
					/>
					<button>Add Money</button>
				</form>
			</div>
		);
	}
}

export default AddMoney;
