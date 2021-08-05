import AsyncTest from './components/AsyncTest';
import Header from './components/Header';
import Item from './components/Item';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <>
        <Header/>
        <ItemListContainer />
        <ItemCount initial={1} stock={5} />
        <AsyncTest/>
        <Item/>
        </>

    );
}

export default App;
