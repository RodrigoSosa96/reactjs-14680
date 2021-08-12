import Header from "./components/Header";

import ItemListContainer from "./components/items/ItemListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/items/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact>
					<>
					hola
					</>
				</Route>
				<Route path="/categoria/:id">
					<ItemListContainer/>
				</Route>
				<Route path="/item/:id">
					<ItemDetailContainer/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
