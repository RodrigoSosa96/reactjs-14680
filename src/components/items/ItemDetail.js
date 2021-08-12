import ItemCount from "./ItemCount";

const ItemDetail = (products) => {
	return (
		<div className="w-96	">
			<img
				src={products.urlImg}
				alt={products.categoria + " " + products.marca}
				className="w-full h-96 object-cover rounded-lg shadow-md"
			/>
			<div className="relative px-4 -mt-16  ">
				<div className="bg-white p-6 rounded-lg shadow-lg">
					<div className="flex items-baseline">
						<span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
							New
						</span>
						<div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
							{products.features} &bull; mas cosas
						</div>
					</div>
					<h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
						Articulo
					</h4>
					<div className="mt-1">
						${products.precio}
						<span className="text-gray-600 text-sm"> /contado</span>
					</div>
					<div className="mt-4">
						<span className="text-teal-600 text-md font-semibold">test </span>
						<span className="text-sm text-gray-600">test</span>
						<ItemCount initial={1} stock={5} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
