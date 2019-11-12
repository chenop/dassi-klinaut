import React from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row-reverse;	
	max-width: 100vw;
	max-height: 100vh;
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
