import React, { Component, useMemo } from 'react';

const Fruit = (item) => {
	return useMemo(() => (
		<div
			onClick={item.handleIncFruit}
			id={item.id}
		>
			{item.fruitName} - {item.fruitCount}
		</div>
	), [item.handleIncFruit, item.id, item.fruitName, item.fruitCount]);
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

	increment = (itemId) => {
		this.setState({ total: this.state.total + 1 });

		let tempArray = [...this.state.fruits];
		tempArray.find(item => item.id === itemId).count++;
		this.setState({ fruits: tempArray });
	}

	render() {
		return (
			<>
				{this.state.fruits.map(item =>
					<Fruit
						key={item.id}
						handleIncFruit={() => this.increment(item.id)}
						fruitName={item.name}
						fruitCount={item.count}
						id={item.id}
					/>
				)}
				<div>Total - {this.state.total}</div>
			</>
		);
	}
}

export default Classes;

// handleIncFruit - sending item.id as argument
// use method find - to search necessary item in array
// useMemo in Fruit component
// e.target.id - do not use it
// use fragment