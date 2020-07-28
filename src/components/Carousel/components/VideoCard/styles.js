import styled from 'styled-components';

export const VideoCardContainer = styled.a`
	border: 4px solid;
	/* border-radius: 10px; */
	text-decoration: none;
	overflow: hidden;
	cursor: pointer;
	color: white;
	flex: 0 0 298px;
	width: 275px;
	height: 190px;
	position: relative;
	display: flex;
	align-items: flex-end;
	padding: 16px;  
	background-image: ${({ url }) => `url(${url})`};
	background-size: cover;
	background-position: center;
	transition: opacity .3s;
	
	&:hover, &:focus {
		opacity: .3;
	}

	&:not(:first-child) {
		margin-left: 20px;
	}
`;
