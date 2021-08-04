import { useState } from "react"

const ItemCount = ({ initial, stock}) => {
    const [ counter, setCounter ] = useState(initial)

    const decreaseCounter = () => (counter > 0) && setCounter(prevCount => prevCount-1)
    
    const increaseCounter = () => (counter < stock) && setCounter(prevCount => prevCount +1) 




    return (
        <>
            <div >
                <button className="
                        top-1 right-1
                        rounded px-3 font-bold
                        text-black bg-gray-200 hover:bg-white"
                    type="button" onClick={decreaseCounter}>-</button>
                
                <p className="text-xs opacity-50 mb-2">Stock: {counter}</p>
                <button className="
                        top-1 left-1
                        rounded px-3 font-bold
                        text-black bg-gray-200 hover:bg-white"
                    type="button" onClick={increaseCounter}>+</button>
            </div>
            <button >Agregar al carrito</button>

        </>
    
    )
}

export default ItemCount
