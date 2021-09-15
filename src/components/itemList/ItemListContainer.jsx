import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import { GridContainer } from "../../styled/ItemList.styled";
import { Spinner } from "../../styled/Spinner.styled";
import ItemList from "./ItemList";

const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [estado, setEstado] = useState(false);
	const params = useParams();

	useEffect(() => {
		const db = firestore;
		const collection = db.collection("productos");

		if (params.id) {
			const filtro = collection.where("categoryId", "==", params.id);
			const query = filtro.get();
			query
				.then((resultados) => {
					const resultados_parseado = [];
					resultados.forEach((documento) => {
						const id = documento.id;
						const data = documento.data();
						const data_final = { id, ...data };
						resultados_parseado.push(data_final);
					});
					setProductos(resultados_parseado);
				})
				.catch((error) => {
					console.log(
						"Error al cargar los productos, intentá nuevamente" + error
					);
				})
				.finally(() => {
					setEstado(!estado);
				});
		} else {
			const query = collection.get();
			query
				.then((res) => {
					const parseRes = [];
					res.forEach((doc) => {
						const id = doc.id;
						const data = doc.data();
						const data_final = { id, ...data };
						parseRes.push(data_final);
					});
					setProductos(parseRes);
				})
				.catch((error) => {
					console.log(
						"Error al cargar los productos, intentá nuevamente" + error
					);
				})
				.finally(() => {
					// eslint-disable-next-line
					setEstado(!estado);
				});
		}
	}, [params.id]);
	if (estado === false) {
		return (
			<>
				<GridContainer>
					<Spinner />
				</GridContainer>
			</>
		);
	} else {
		return (
			<>
				<ItemList items={productos} />
			</>
		);
	}
};
export default ItemListContainer;
