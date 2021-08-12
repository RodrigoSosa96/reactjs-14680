import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Productos from "../Productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
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
				if(params.id) {
					res(Productos.filter((prod) => prod.categoria === params.id))
					console.log(Productos)
				}
			}, 2000);
		});
		return promesa
	}

	return (
		<div className="grid  gap-8 bg-gray-400 antialiased text-gray-900">
			<ItemList items={products} />
		</div>
	);
};

export default ItemListContainer;
