import React from 'react';

const Fruit = (props) => {
	return (
		<div onClick={props.handleIncFruit}>{props.fruitName} - {props.fruitCount}</div>
	);

}

const Functions = (props) => {
	const state = {
			fruits: [
				{ name: 'Lemon', count: 3 },
				{ name: 'Apple', count: 2 },
				{ name: 'Mango', count: 2 },
			],
			total: 7,
		}

	// handleInc = () => {
	// 	this.setState(state => { Lemon: this.state.Lemon++ });
	// 	this.setState(state => { Total: this.state.Total++ });
	// }

	return (
		<div>
			{state.fruits.map(item =>
				<Fruit handleIncFruit="handleInc" fruitName={item.name} fruitCount={item.count} />
			)}
			<div>Total - {state.total}</div>
		</div>
	);
}

export default Functions;