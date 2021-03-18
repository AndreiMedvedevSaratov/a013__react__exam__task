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
		const list = { ...state.fruits };
		const id = fruitId.id;

		list[id].count = list[id].count + 1;
		let newTotal = state.total + 1;

		return {
			...state,
			fruits: list,
			total: newTotal,
		};
	},
}

export const fruits = (state = initialState, action) => reducerMapping[action.type] ? reducerMapping[action.type](state, action.payload) : state;