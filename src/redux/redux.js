import React from 'react';

// const nanoid = () => Math.random();

const Fruit = (props) => {
	return (
		<div onClick={props.handleIncFruit}>{props.fruitName} - {props.fruitCount}</div>
	);

}

// const initialState = {
// 	fruits: [
// 		id1: { name: 'Lemon', count: 3 },
// 		id2: { name: 'Apple', count: 2 },
// 		id3: { name: 'Mango', count: 2 },
// 	],
// 	fruitsIds: [id1, id2, id3],
// 	total: 7,
// }




// const reducer = (action) => {
// 	switch (action.type) {
// 		case: 'INC': {
// 			const { id } = action.payload;
// 			return {
// 				...state,
// 				fruits: {
// 					...state.fruits,
// 					[id]: {
// 						...state.fruits[id],
// 						count: ...state.fruits[id].count + 1,
// 					}
// 				}
// 			}

// 		}
// 		default: {
// 			return state;
// 		}
// 	}

// }


const Redux = (props) => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		fruits: [
	// 			{ name: 'Lemon', count: 3 },
	// 			{ name: 'Apple', count: 2 },
	// 			{ name: 'Mango', count: 2 },
	// 		],
	// 		total: 7,
	// 	}
	// 	this.handleInc = this.handleInc.bind(this);

	// }

	// handleInc() {
	// 	this.setState(state => { Lemon: this.state.Lemon++ });
	// 	this.setState(state => { Total: this.state.Total++ });
	// }

	return (
		<div>
			{/* {this.state.fruits.map(item =>
				<Fruit handleIncFruit="handleInc" fruitName={item.name} fruitCount={item.count} />
			)} */}
			{/* <div>Total - {this.state.total}</div> */}
			Would be here
		</div>
	);
}

export default Redux;