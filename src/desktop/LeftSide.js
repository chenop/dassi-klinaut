import React, {Fragment} from 'react';
import Gallery from "../components/Gallery";
import styled from "@emotion/styled";

const Container = styled.div`
	flex: 7;
	  background-color: red;

`;

const LeftSide = () => {
	return (
		<Container>
			<Gallery/>
		</Container>
	);
};

export default LeftSide;
