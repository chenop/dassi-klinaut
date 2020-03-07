import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import {Context} from "../Context";

const Container = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: ${props => props.isDesktop ? "right" : "center"};
	line-height: 30px;
	margin-right: 50px;
	margin-left: 50px;
`;

const Text = styled(Typography)`
    color: ${props=> props.isDesktop ? "black" : "white"};
	letter-spacing: ${props => props.isDesktop ? "1px" : "2px"};
	text-shadow: ${props => props.isDesktop ? "0px" : "2px 2px 2px rgba(0,0,0,.7)" }
`;
const Title = () => {
	const {isDesktop} = React.useContext(Context);

	const variant1 = isDesktop ? "h4" : "h5";
	const variant2 = isDesktop ? "h6" : "h7";

	return (
		<Container isDesktop={isDesktop}>
			<Text isDesktop={isDesktop} variant={variant1}>הדס אופנהיים</Text>
			<Text isDesktop={isDesktop} variant={variant1}>קלינאית תקשורת</Text>
			<Text isDesktop={isDesktop} variant={variant2}>חיפה</Text>
		</Container>
	);
};

export default Title;
