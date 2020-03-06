import React from 'react';
import styled from "@emotion/styled";
import mainImage from "../assets/Hadas2.jpg";
import {Context} from "../Context";

const Container = styled.div`
    display: flex;
    flex: 1;
`;

const BackgroundImage = styled.div`
	background-image: url(${mainImage});
	flex: 1;
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
