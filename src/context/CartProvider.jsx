import { createContext, useContext, useState } from "react";
export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;


const CartProvider = ({children}) => {
	const [items, setItems] = useState([]);
	const addITem = (item, cantidad) => {
		if (isInCart(item.id)) return false;
		setItems([...items, { item, cantidad }]);
	};
	const removeITem = (itemId) => setItems(items.filter());
	const isInCart = (itemId) => items.some(({item}) => item.id === itemId);/////
	const clear = () => {
		setItems([]);
	};
	const context = {
		items,
		addITem,
		removeITem,
		isInCart,
		clear,
	};
	return <Provider value={context}>{children}</Provider>;
};

export default CartProvider;
