/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

const Cell = ({ filled, onClick, isDisabled }) => {
	return (
		<button
			className={filled ? 'cell cell-active' : 'cell'}
			onClick={onClick}
			disabled={isDisabled}
		></button>
	);
};

const App = () => {
	const [order, setOrder] = useState([]);
	const [isDeactaveting, setIsDeactaveting] = useState(false);
	const config = [
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	];

	function deactivateCells() {
		setIsDeactaveting(true);

		const timer = setInterval(() => {
			setOrder((originalOrder) => {
				const newOrder = originalOrder.slice();
				newOrder.pop();

				if (newOrder.length === 0) {
					setIsDeactaveting(false);
					clearInterval(timer);
				}

				return newOrder;
			});
		}, 500);
	}

	const activateCell = (index) => {
		const newOrder = [...order, index];
		setOrder(newOrder);

		//deactivate all cells
		if (newOrder.length == config.flat(1).filter(Boolean).length) {
			deactivateCells();
		}
	};

	return (
		<>
			<h1>Grid-Lights</h1>
			<div
				className="grid"
				style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
			>
				{config.flat(1).map((value, index) => {
					return value ? (
						<Cell
							key={index}
							filled={order.includes(index)}
							isDisabled={order.includes(index) || isDeactaveting}
							onClick={() => activateCell(index)}
						/>
					) : (
						<div className="center">{isDeactaveting && '😎'}</div>
					);
				})}
			</div>
		</>
	);
};
export default App;
