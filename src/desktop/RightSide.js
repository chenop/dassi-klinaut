import React from 'react';
import styled from "@emotion/styled";
import {withTheme} from "@material-ui/core";
import Title from "../components/Title";
import ContactUs from "../components/ContactUs";
import Bio from "../components/Bio";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	min-width: 400px;
	height: 100%;
`;

const RightSide = (props) => {
    return (
        <Container {...props}>
			<Title/>
			<ContactUs />
			<Bio isDesktop/>
		</Container>
    );
};

export default withTheme(RightSide);
