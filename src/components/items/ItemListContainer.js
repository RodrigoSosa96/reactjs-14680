import { useState } from "react";
import ItemList from "./ItemList";
import Productos from "../Productos";

const ItemListContainer = () => {
	const [products, setProducts] = useState();

	const getItems = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Productos);
		}, 2000);
	});
	getItems.then((fetchedProducts) => {
		setProducts(fetchedProducts);
	});

	return (
		<div className="grid  gap-8 bg-gray-400 antialiased text-gray-900">
			<ItemList items={products} />
		</div>
	);
};

export default ItemListContainer;
