import React from 'react';
import Gallery from "../components/Gallery";
import styled from "@emotion/styled";
import {withTheme} from "@material-ui/core";

const Container = styled.div`
	flex: 7;
	color: ${props => props.color };
`;

const LeftSide = ({theme}) => {
	return (
		<Container color={theme.palette.primary.main}>
			<Gallery />
		</Container>
	);
};

export default withTheme(LeftSide);
