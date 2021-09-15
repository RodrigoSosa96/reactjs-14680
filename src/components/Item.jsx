import { CardLink } from "../styled/ItemList.styled";

const Item = ({
	product: { id, categoria, marca, features, precio },
}) => {
	// const {detalles} = product
	console.log(categoria);
	return (
		<>
			<CardLink to={`/item/${id}`}></CardLink>
			<div className='card-front-wrap'>
				<div className='card-front'>
					<h1>{marca}</h1>
				</div>
				<div className='card-footer'>
					<p>{features}</p>
					<p>${precio}</p>
				</div>
			</div>
			<div className='card-overlay'>
				<h5>Mas información :</h5>
				<div className='card-body'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className='register-button'>Ver mas &#187;</div>
				</div>
			</div>
		</>
	);
};

export default Item;
