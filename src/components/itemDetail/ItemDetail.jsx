import { CardDetail, Container } from "../../styled/ItemDetail.styled";
import { useCartContext } from "../../context/CartProvider";
import { useState } from "react";
import ItemCounter from "./ItemCounter";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ detail }) => {
	const { categoria, marca, features, precio, stock, urlImg } = detail;
	const [count, setCount] = useState();
	const context = useCartContext();
	const addItem = (add) => setCount(add);

	const stockItem = stock;
	return (
		<Container>
			<CardDetail>
				<div className='cardImg'>
					<img src={urlImg} alt={marca} />
				</div>
				<div className='details'>
					<h1>{marca}</h1>
					<p>Categoría : {categoria}</p>
					<p>{features}</p>
					<p className='precio'>${precio}</p>
					<p>Stock : {stockItem}</p>
					<p className='pDetails'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
						dicta, blanditiis voluptates illo cum laudantium unde ab ad minus
						minima eum maiores? Dignissimos quidem aspernatur qui nobis,
						corporis modi.
					</p>
				</div>
				{() => {
					if (count > 1) {
						return (
							<>
								<p>cantidad: {count}</p>
								<NavLink to='cart'>
									<button onClick={() => context.addItem(detail, count)}>
										Finalizar la compra
									</button>
								</NavLink>
							</>
						);
					} else {
						return (
							<>
								{context.isInCart(detail.id) ? (
									<p>Este producto ya se encuentra en el carrito</p>
								) : (
									<ItemCounter initial={10} stock={10} />
								)}
							</>
						);
					}
				}}
			</CardDetail>
		</Container>
	);
};

export default ItemDetail;
