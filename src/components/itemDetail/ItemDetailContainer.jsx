import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../../firebase";
import ItemDetail from "./ItemDetail";
import { Spinner } from "../../styled/Spinner.styled";
import { Container } from "../../styled/ItemDetail.styled";

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState([]);
    const [estado, setEstado] = useState(false)
	const { id } = useParams();

	useEffect(() => {
		const db = firestore;
		db.collection("productos")
			.doc(id)
			.get()
			.then((querySnap) => {
				setProducto({ id: id, ...querySnap.data() });
			})
            .catch((err) => console.log('Error en la carga de procuctos: ' + err))
            .finally(() => {
                setEstado(!estado)
            });
            
	}, [id]);
    if(estado === false) {
        return (
            <Container>
                <Spinner/>
            </Container>
        )
    } else {
        return(
            <>
                <ItemDetail detail={producto}/>
            </>
        )
    }
};

export default ItemDetailContainer;
