import React from 'react';
import styled from "@emotion/styled";
import Gallery from "../components/Gallery";

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;
const MobileLayout = () => {
    return (
        <Container>
			<Gallery />
        </Container>
    );
};

export default MobileLayout;
