import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Productos from "../Productos";

const ItemDetailContainer = () => {
	const [products, setProducts] = useState(0);
	const params = useParams();

	useEffect(() => {
		const promesa  = getItems()
		promesa.then((fetchedProducts) => {
			setProducts(fetchedProducts);
		});
	}, [params]);

	const getItems = () => {
		const promesa = new Promise((res, rej) => {
			setTimeout(() => {
					res(Productos.filter((prod) => prod.id === params.id))
					console.log(Productos)

			}, 2000);
		});
		return promesa
	}
	return (
		<>
			<ItemDetail items={products} />
		</>
	);
};

export default ItemDetailContainer;
