import React, {useContext} from 'react';
import styled from "@emotion/styled";
import mainImage from "../assets/letters.jpeg";
import profileImage from "../assets/Hadas3.jpg";
import profileLooksUpImage from "../assets/Hadas5.jpg";
import {Context} from "../Context";

const Container = styled.div`
    display: flex;
    flex: 1;
`;

const BackgroundImage = styled.div`
	background-image: url(${props => props.isDesktop ? mainImage : profileImage});
	flex: 1;
    background-position: center;
    background-size: cover;
`;

const ProfileImage = styled.div`
	position: absolute;
	bottom: 50px;
	right: 50px;
	height: 200px;
	width: auto;
	z-index: 3;
	object-fit: contain;
	box-shadow: 10px 10px 46px 28px rgba(188,202,211,0.7);
`;

const Image = () => {
	const {isDesktop} = useContext(Context);

	return (
		<Container>
			<BackgroundImage isDesktop={isDesktop}/>
			{isDesktop &&
			<ProfileImage>
				<img src={profileLooksUpImage} style={{maxWidth: "100%", maxHeight: "100%"}}/>
			</ProfileImage>
			}
		</Container>
	);
};

export default Image;
