import React, {useMemo, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './../store/Fruits/Actions';

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

const Redux = () => {
	const fruits = useSelector((state) => state.fruits);
	let total = useSelector((state) => state.fruits.total);
	const dispatch = useDispatch();

	const incrementCount = useCallback((e) => {
		dispatch(increment(e.target.id));
	}, [dispatch]);

	const markup = useMemo(() => (
		<div>
			{!!fruits.fruitsIds.length && <div>
				{fruits.fruitsIds.map(item =>
					<Fruit
						key={item}
						handleIncFruit={incrementCount}
						fruitName={fruits.fruits[Number(item)].name}
						fruitCount={fruits.fruits[Number(item)].count}
						id={item}
					/>
				)}
			</div>
			}
			<div>Total - {total}</div>
		</div>
	), [fruits, incrementCount, total]);

	return markup;
}

export default Redux;