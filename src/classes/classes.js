import React, { Component } from 'react';

const Fruit = (props) => {
	return (
		<div onClick={props.handleIncFruit}>{props.fruitName} - {props.fruitCount}</div>
	);

}

class Classes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fruits: [
				{ name: 'Lemon', count: 3 },
				{ name: 'Apple', count: 2 },
				{ name: 'Mango', count: 2 },
			],
			total: 7,
		}
		this.handleInc = this.handleInc.bind(this);
	}

	handleInc() {
		this.setState(state => { Lemon: this.state.Lemon++ });
		this.setState(state => { Total: this.state.Total++ });
	}

	render() {
		return (
			<div>
				{this.state.fruits.map(item =>
					<Fruit handleIncFruit="handleInc" fruitName={item.name} fruitCount={item.count} />
				)}

				<div>Total - {this.state.total}</div>
			</div>
		);
	}
}

export default Classes;