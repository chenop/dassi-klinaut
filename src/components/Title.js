import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

const Container = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: right;
	margin-bottom: 30px;
	line-height: 30px;
`;

const Text = styled(Typography)`
    letter-spacing: 1px;
`;
const Title = () => {
	return (
		<Container>
			<Text variant={"h4"}>הדס אופנהיים</Text>
			<Text variant={"h4"}>קלינאית תקשורת</Text>
			<Text variant={"h6"}>חיפה</Text>
		</Container>
	);
};

export default Title;
