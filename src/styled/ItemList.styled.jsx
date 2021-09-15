import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GridContainer = styled.div`
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, 17rem);
	gap: 2rem;
	justify-content: center;

`;

export const Card = styled.div`
	position: relative;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${(props) => props.bgImg});
	-webkit-background-size: contain;
	-moz-background-size: contain;
	-o-background-size: contain;
	background-size: contain;
	background-size: cover;
	overflow-y: hidden;
	box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
	border-radius: 7px;
	min-height: 300px;

	h1 {
		color: #fff;
		margin: 0;
		letter-spacing: 0;
		text-transform: uppercase;
		line-height: 1;
	}
	h5 {
		margin: 0;
		display: block;
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff;
		padding: 1rem;
		transform: translate3d(0, -100%, 0);
		transition: transform 300ms;
	}

	.card-front-wrap {
		padding: 25px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.card-front {
			margin-bottom: 20px;
		}
		.card-footer {
			margin-top: auto;
			color: #fff;
			p {
				font-size: 12px;
				margin-bottom: 2px;
				margin-top: 5px;
			}
			i {
				margin-right: 10px;
			}
		}
	}
	.card-overlay {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		position: absolute;
		width: 100%;
		top: 0;
		transition: transform 300ms;
		background-color: #e5bc73;
		transform: translate3d(0, 100%, 0);
		.card-body {
			flex-grow: 1;
			padding: 1rem;
			opacity: 0;
			transition: opacity 500ms 100ms;
			p {
				margin: 0;
			}
			.register-button {
				display: inline-block;
				padding: 4px 8px;
				border: 2px solid #1e1e1e;
				border-radius: 2px;
				color: #1e1e1e;
				margin-top: 20px;
			}
		}
	}
`;

export const CardLink = styled(NavLink)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	:hover ~ .card-overlay {
		transform: translate3d(0, 0, 0);
	}
	:focus ~ .card-overlay {
		transform: translate3d(0, 0, 0);
	}
	:hover ~ .card-overlay h5 {
		transform: translate3d(0, 0, 0);
		color: #1e1e1e;
	}
	:focus ~ .card-overlay h5 {
		transform: translate3d(0, 0, 0);
		color: #1e1e1e;
	}
	:hover ~ .card-overlay .card-body {
		opacity: 1;
	}
	:focus ~ .card-overlay .card-body {
		opacity: 1;
	}
`;
