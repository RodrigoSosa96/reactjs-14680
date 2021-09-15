import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import GlobalStyle from "./GlobalStyles.styles";
import './fonts.css'
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/'>
                        <ItemListContainer/>
					</Route>
					<Route path='/productos'>
						<ItemListContainer/>
					</Route>
					<Route path='/item/:id'>
						<ItemDetailContainer/>
					</Route>
				</Switch>
			</BrowserRouter>
			<GlobalStyle />
		</>
	);
}

export default App;
