import { useState } from "react";
import {Hamburguer, Links, Logo, Menu, Nav} from './Navbar.styled'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Nav>
			<Logo to="/">
				Rodrigo<span>Sosa</span>
			</Logo>
			<Hamburguer onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburguer>
			<Menu isOpen={isOpen}>
				<Links exact to='/' activeClassName="current">Home</Links>
				<Links to='/productos'  activeClassName="current">Productos</Links>
				<Links to='/carrito' activeClassName="current">Carrito</Links>
				<Links to='/contacto' activeClassName="current">Contacto</Links>
			</Menu>
		</Nav>
	);
};


export default Navbar;
