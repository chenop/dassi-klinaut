import React, {Fragment} from 'react';
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 30px;
`;

const WButton = styled(Button)`
	flex: 1;
	height: 50px;
`;


const ContactUs = () => {
    return (
        <Container>
            <WButton variant="contained" color="primary">וואטסאפ</WButton>
        </Container>
    );
};

export default ContactUs;
