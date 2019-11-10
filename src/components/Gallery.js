import React from 'react';
import styled from "@emotion/styled";
import {lightGreen} from "@material-ui/core/colors";
import mainImage from "../assets/main.jpg";
import {css} from "@emotion/core";

const Container = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const Gallery = () => {
	return (
		<Container backgroundColor={lightGreen[100]}>
			{/*image*/}
			<img
			    src={mainImage}
			    className={css({
                    objectFit: "contain"
			    })}
			/>
		</Container>
	);
};

export default Gallery;
