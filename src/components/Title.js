import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

const Container = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: right;
	margin-bottom: ${props => props.isDesktop ? "30px" : "0px"};
	line-height: 30px;
`;

const Text = styled(Typography)`
    letter-spacing: 1px;
    color: ${props=> props.color}
`;
const Title = ({color = "black"}) => {
	return (
		<Container>
			<Text variant={"h4"} color={color}>הדס אופנהיים</Text>
			<Text variant={"h4"} color={color}>קלינאית תקשורת</Text>
			<Text variant={"h6"} color={color}>חיפה</Text>
		</Container>
	);
};

export default Title;
