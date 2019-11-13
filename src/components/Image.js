import React from 'react';
import styled from "@emotion/styled";
import mainImage from "../assets/main.jpg";
import {Context} from "../Context";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: hidden;
`;

const BackgroundImage = styled.div`
	background-image: url(${mainImage});
	width: 100vw;
    height: 100%;//${props => props.isDesktop ? "100vh" : "40vh"};
    background-position: center;
    background-size: cover;
`;

const Image = () => {
	const {isDesktop} = React.useContext(Context);

	return (
		<Container>
			<BackgroundImage isDesktop={isDesktop}/>
		</Container>
	);
};

export default Image;
