import React, { Component } from 'react';

const Fruit = (props) => {
	return (
		<div
			onClick={props.handleIncFruit}
			id={props.id}
		>
			{props.fruitName} - {props.fruitCount}
		</div>
	);
}

class Classes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fruits: [
				{ name: 'Lemon', count: 3, id: '0' },
				{ name: 'Apple', count: 2, id: '1' },
				{ name: 'Mango', count: 2, id: '2' },
			],
			total: 7,
		}
		this.increment = this.increment.bind(this);
	}

	increment = (e) => {
		let tempArray = this.state.fruits;
		for (let i = 0; i < this.state.fruits.length; i++) {
			if (this.state.fruits[i].id === e.target.id) {
				tempArray[i].count++;
			}
		}
		this.setState({ fruits: tempArray });
		this.setState({ total: this.state.total + 1 });
	}

	render() {
		return (
			<div>
				{this.state.fruits.map(item =>
					<Fruit
						key={item.id}
						handleIncFruit={this.increment}
						fruitName={item.name}
						fruitCount={item.count}
						id={item.id}
					/>
				)}
				<div>Total - {this.state.total}</div>
			</div>
		);
	}
}

export default Classes;