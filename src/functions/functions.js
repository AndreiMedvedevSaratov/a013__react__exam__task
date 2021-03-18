import React, { useState } from 'react';

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

const Functions = (props) => {
	const [fruits, setFruits] = useState([
		{ name: 'Lemon', count: 3, id: '0' },
		{ name: 'Apple', count: 2, id: '1' },
		{ name: 'Mango', count: 2, id: '2' },
	]);
	const [total, setTotal] = useState(7);

	const increment = (e) => {
		let tempArray = fruits;
		for (let i = 0; i < fruits.length; i++) {
			if (fruits[i].id === e.target.id) {
				tempArray[i].count++;
			}
		}
		setFruits(tempArray);
		setTotal(total + 1);
	}

	return (
		<div>
			{!!fruits.length && <div>
				{fruits.map(item =>
					<Fruit
						key={item.id}
						handleIncFruit={increment}
						fruitName={item.name}
						fruitCount={item.count}
						id={item.id}
					/>
				)}
			</div>
			}
			<div>Total - {total}</div>
		</div>
	);
}

export default Functions;