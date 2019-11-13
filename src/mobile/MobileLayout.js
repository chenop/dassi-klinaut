import React from 'react';
import styled from "@emotion/styled";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";
import Bio from "../components/Bio";

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	max-width: 100vw;
	position: relative;
`;
const MobileLayout = () => {
    return (
        <Container>
			<Gallery />
			<ContactUs/>
			<Bio/>
        </Container>
    );
};

export default MobileLayout;
