import { useState } from "react";
import { CounterStyled } from "../../styled/ItemCounter.styled";
import { useCartContext } from "../../context/CartProvider";

const ItemCounter = ({ initial, stock }) => {
	const [counter, setCounter] = useState(initial);

	const decreaseCounter = () =>
		counter > 0 && setCounter((prevCount) => --prevCount);

	const increaseCounter = () =>
		counter < stock && setCounter((prevCount) => ++prevCount);

	return (
		<>
			<CounterStyled>
				<button className='boton' type='button' onClick={decreaseCounter}>
					-
				</button>

				<p>Stock: {counter}</p>
				<button className='boton' type='button' onClick={increaseCounter}>
					+
				</button>
				<button>Agregar al carrito</button>
			</CounterStyled>
		</>
	);
};

export default ItemCounter;
