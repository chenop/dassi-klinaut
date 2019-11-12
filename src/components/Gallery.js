import React from 'react';
import styled from "@emotion/styled";
import mainImage from "../assets/main.jpg";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: hidden;
    height: 100vh;
`;

const Gallery = () => {
	return (
		<Container>
			<img src={mainImage} />
		</Container>
	);
};

export default Gallery;
