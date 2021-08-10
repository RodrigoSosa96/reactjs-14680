import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
	const [products, setProducts] = useState();
	const fetchSettings = {
		async: true,
		crossDomain: true,
		url: "https://api.jsonbin.io/v3/b/60c84bb098ca6c704eb055fc/latest",
		method: "GET",
		headers: {
			"X-Master-Key":
				"$2b$10$N436g4d/8eI82cQnCZKRNeru8F/lrwBlQXjP9ZVGpx5rVJ37jF0kG",
		},
		data: {},
	};
	const getItems = fetch(
		"https://api.jsonbin.io/v3/b/60c84bb098ca6c704eb055fc/latest",
		{
			method: "get",
			headers: new Headers({
				"X-Master-Key": "$2b$10$N436g4d/8eI82cQnCZKRNeru8F/lrwBlQXjP9ZVGpx5rVJ37jF0kG",
				"Content-Type": "application/x-www-form-urlencoded",
			}),
			data: {},
		}
	);
    getItems.then(r => console.log(r))
	getItems.then((fetchedProducts) => {
		setProducts(fetchedProducts);
	});

	return (
        <>
        <ItemDetail items={products} />
        </>
	);
};

export default ItemDetailContainer;
