import { Link } from "react-router-dom"

const Item = ({product}) => {

    return (
            <div className="w-96	" key={product.id}>
                <img src={product.urlImg} alt={product.categoria + " " + product.marca} className="w-full h-96 object-cover rounded-lg shadow-md"/>
                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                New
                            </span>
                            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            {product.features}  &bull; mas cosas
                            </div>  
                        </div>
                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">Articulo</h4>
                        <div className="mt-1">
                            ${product.precio}
                            <span className="text-gray-600 text-sm">   /contado</span>
                        </div>
                        <div className="mt-4">
                            <Link to={`/item/${product.id}`} className="text-teal-600 text-md font-semibold">Ver mas </Link>
                            <span className="text-sm text-gray-600">test</span>
                        </div>  
                    </div>
                </div>
            </div>
    )   
}

export default Item