import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const Nav = styled.div`
	padding: 0, 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background-color: white;
`;
export const Menu = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({isOpen}) =>(isOpen ? "300px" : "0px")};
	}
`;
export const Links = styled(NavLink)`
	padding: 0.5rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: #67bc98;
	transition: all 0.3s eantse-in;
	font-size: 0.9rem;
    &.${props => props.activeClassName} {
		border-bottom: 1px solid black;
    }
	&:hover {
		color: #7b7fda;
	}

`;
export const Hamburguer = styled.div`
	display: none;
	span {
		height: 2px;
		width: 25px;
		background-color: #7b7fda;
		margin-bottom: 4px;
		border-radius: 5px;
		
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
`;
export const Logo = styled(NavLink)`
	padding: 1rem 0;
	color: #7b7fda;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;
	span {
		font-weight: 300;
		font-size: 1.3rem;
	}
`;