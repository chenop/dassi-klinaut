import React from 'react';
import styled from "@emotion/styled";
import {lightGreen} from "@material-ui/core/colors";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.backgroundColor}
`;

const Gallery = () => {
	return (
		<Container backgroundColor={lightGreen[100]}>
			image
			{/*<img*/}
			{/*    src={mainImage}*/}
			{/*    className={css({*/}
			{/*        objectFit: "contain",*/}
			{/*    })}*/}
			{/*/>*/}
		</Container>
	);
};

export default Gallery;
