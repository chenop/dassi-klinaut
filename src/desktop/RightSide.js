import React from 'react';
import styled from "@emotion/styled";

const Container = styled.div`
	flex: 3;
	  background-color: aliceblue;

`;

const RightSide = () => {
    return (
        <Container>
            This is the bio and contact us
        </Container>
    );
};

export default RightSide;
