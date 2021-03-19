import { fruitsActionTypes } from "./ActionTypes";

const initialState = {
	fruits: {
		'0': { name: 'Lemon', count: 3 },
		'1': { name: 'Apple', count: 2 },
		'2': { name: 'Mango', count: 2 },
	},
	fruitsIds: ['0', '1', '2'],
	total: 7,
}

const reducerMapping = {
	[fruitsActionTypes.inc]: (state, fruitId) => {
		const id = fruitId.id;

		return {
			...state,
			fruits: {
				...state.fruits,
				[id]: {
					...state.fruits[id],
					count: state.fruits[id].count + 1,
				}
			},
			total: state.total + 1,
		}
	},
}

export const fruits = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;

// change in reducer - to make it like waterfall