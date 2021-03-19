import React, { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './../store/Fruits/Actions';

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

const Redux = () => {
	const localState = useSelector((state) => state.fruits);
	let total = useSelector((state) => state.fruits.total);
	const dispatch = useDispatch();

	const incrementCount = useCallback((id) => {
		dispatch(increment(id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<>
			{localState.fruitsIds.map(item =>
				<Fruit
					key={item}
					handleIncFruit={() => incrementCount(localState.fruitsIds[item])}
					fruitName={localState.fruits[item].name}
					fruitCount={localState.fruits[item].count}
					id={item}
				/>
			)}
			<div>Total - {total}</div>
		</>
	), [localState, incrementCount, total]);

	return markup;
}

export default Redux;

// handleIncFruit - sending item.id as argument
// useMemo in Fruit component
// use fragment
// decided not to use - {!!fruits.length && <div>
// do not use Number(id)
// e.target.id - do not use it
// change 'fruits' to 'localState'