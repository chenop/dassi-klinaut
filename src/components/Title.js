import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: right;
	margin-bottom: 30px;
	line-height: 30px;
`;

const Text = styled.div`
    font-size: ${props => props.fontSize ? "15px" : "20px"};
    font-weight: bold;
    letter-spacing: 1px;
`;
const Title = () => {
	return (
		<Container>
			<Text>הדס אופנהיים</Text>
			<Text>קלינאית תקשורת</Text>
			<Text fontSize={"small"}>חיפה</Text>
		</Container>
	);
};

export default Title;
