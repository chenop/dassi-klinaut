import React from 'react';
import styled from "@emotion/styled";
import {lightGreen} from "@material-ui/core/colors";
import mainImage from "../assets/main.jpg";
import {css} from "@emotion/core";

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
