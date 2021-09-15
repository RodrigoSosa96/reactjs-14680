import Item from "../Item";
import { Card, GridContainer } from "../../styled/ItemList.styled";

const ItemList = ({items}) => {

	

	return (
			<GridContainer>
				{items.map(item => {
					return <Card bgImg={item.urlImg}>
								<Item key={item.id} product={item} />
							</Card>
				})}

				
			</GridContainer>
	);
};

export default ItemList;
