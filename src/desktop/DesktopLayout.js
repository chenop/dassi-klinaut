import React from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: row;	
	min-height: 100vh;
	min-width: 100vw;	
`;

const DesktopLayout = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide />
        </Container>
    );
};

export default DesktopLayout;
