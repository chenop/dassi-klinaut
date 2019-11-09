import React from 'react';
import styled from "@emotion/styled";
import {withTheme} from "@material-ui/core";

const Container = styled.div`
${({theme}) => `
	flex: 3;
	color: ${theme.palette.secondary.main}
	`}
`;

const RightSide = (props) => {
    return (
        <Container {...props}>
            This is the bio and contact us
        </Container>
    );
};

export default withTheme(RightSide);
