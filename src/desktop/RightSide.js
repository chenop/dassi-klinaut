import React from 'react';
import styled from "@emotion/styled";
import {withTheme} from "@material-ui/core";
import Title from "../components/Title";
import ContactUs from "../components/ContactUs";
import Bio from "../components/Bio";

const Container = styled.div`
	width: 30%;
	padding: 50px;
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
