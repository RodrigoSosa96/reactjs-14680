import Header from "./components/Header";
import ItemCount from "./components/items/ItemCount";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer"

function App() {
	return (
		<>
			<Header />
			<ItemCount initial={1} stock={5} />
			<ItemListContainer />
		</>
	);
}

export default App;
