import Header from './components/Header';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <>
        <Header/>
        <ItemListContainer />
        <ItemCount initial={1} stock={5} />
        </>

    );
}

export default App;
