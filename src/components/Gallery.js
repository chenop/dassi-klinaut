import React from 'react';
import styled from "@emotion/styled";
import mainImage from "../assets/main.jpg";
import {Context} from "../Context";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: hidden;
    height: ${props => props.isDesktop ? "100vh" : "50vh"};
`;

const Gallery = () => {
	const {isDesktop} = React.useContext(Context);

	return (
		<Container isDesktop={isDesktop}>
			<img src={mainImage} />
		</Container>
	);
};

export default Gallery;
