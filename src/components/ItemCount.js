import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd}) => {
    const [ counter, setCounter ] = useState(initial)

    const increaseCounter = () => (counter < stock) && setCounter(counter + 1) 

    const decreaseCounter = () => (counter > 0) && setCounter(counter - 1)

    //const addToCart = () => (stock > 0) && onAdd(amount)
    const addToCart = () => {
        if (stock > 0) {
            onAdd(counter)
        }
    }


    return (
        <>
            <div >
                <button className="
                        top-1 right-1
                        rounded px-3 font-bold
                        text-black bg-gray-200 hover:bg-white"
                    type="button" onClick={decreaseCounter}>-</button>
                
                <p className="text-xs opacity-50 mb-2">Stock: {stock}</p>
                <button className="
                        top-1 left-1
                        rounded px-3 font-bold
                        text-black bg-gray-200 hover:bg-white"
                    type="button" onClick={increaseCounter}>+</button>
            </div>
            <button onClick={addToCart}>Agregar al carrito</button>

        </>
    
    )
}

export default ItemCount
