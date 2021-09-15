import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;
export const CardDetail = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #515151;
	width: 70vw;
	height: 68vh;
	border: 1px solid black;

	.cardImg {
		height: fit-content;
		img {
			margin: 0px 50px;
			height: 512px;
			width: 377px;
			border-radius: 5px;
			object-fit: cover;
		}
	}
	.details {
		height: 60%;
		h1 {
			font-size: 4rem;
		}
		p {
			font-size: 1.2em;
		}
		.pDetails {
			margin-top: 40px;
		}
	}
	.botonAgregar {
		position: absolute;
        bottom: 0;
        right: 0;
        margin: 0 2rem 2rem 0;
		background-color: #4677E0;
		border: none;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 1.2rem;
        cursor: pointer;
		&:active {
			background-color: #3769d6;
		}
	}
`;
