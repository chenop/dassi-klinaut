import React from 'react';
import Image from "./Image";
import {Context} from "../Context";
import styled from "@emotion/styled";
import Title from "./Title";

const Container = styled.div`
	display: flex;
    flex: 1;
    min-height: ${props => props.isDesktop ? "100vh" : "40vh"};
	position: relative;
	justify-content: center;
`;

const TitleContainer = styled.div`
	display: flex;
	position: absolute;
	flex-direction: column;
	align-self: flex-end;
	align-items: center;
	flex: 1;
`;

const Gallery = () => {
	const {isDesktop} = React.useContext(Context);

	return (
		<Container isDesktop={isDesktop}>
			<Image/>
			{!isDesktop &&
			<TitleContainer>
				<Title color="white"/>
			</TitleContainer>
			}
		</Container>
	);
};

export default Gallery;
