import React from 'react';
import styled from "@emotion/styled";
import {withTheme} from "@material-ui/core";
import Title from "../components/Title";
import ContactUs from "../components/ContactUs";
import Bio from "../components/Bio";

const Container = styled.div`
	margin: 50px;
	flex: 3;
	width: 100%;
`;

const RightSide = (props) => {
    return (
        <Container {...props}>
			<Title/>
			<ContactUs />
			<Bio />
		</Container>
    );
};

export default withTheme(RightSide);
