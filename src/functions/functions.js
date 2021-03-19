import React, { useState, useMemo } from 'react';

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

const Functions = () => {
	const [fruits, setFruits] = useState([
		{ name: 'Lemon', count: 3, id: '0' },
		{ name: 'Apple', count: 2, id: '1' },
		{ name: 'Mango', count: 2, id: '2' },
	]);
	const [total, setTotal] = useState(7);

	const increment = (itemId) => {
		setTotal(total + 1);

		let tempArray = [...fruits];
		tempArray.find(item => item.id === itemId).count++;
		setFruits(tempArray);
	}

	return (
		<>
			{fruits.map(item =>
				<Fruit
					key={item.id}
					handleIncFruit={() => increment(item.id)}
					fruitName={item.name}
					fruitCount={item.count}
					id={item.id}
				/>
			)}
			<div>Total - {total}</div>
		</>
	);
}

export default Functions;

// handleIncFruit - sending item.id as argument
// use method find - to search necessary item in array
// useMemo in Fruit component
// e.target.id - do not use it
// use fragment
// decided not to use - {!!fruits.length && <div>