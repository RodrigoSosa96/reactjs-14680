import {useState} from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {
    const[products, setProducts] = useState()

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    }).then(fetchedProducts => {
        setProducts(fetchedProducts)
    })

    return (
        <div>
        <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer
