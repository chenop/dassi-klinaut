import React from 'react';
import styled from "@emotion/styled";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Typography, withStyles} from "@material-ui/core";
import {lightGreen} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import {darken} from "@material-ui/core/styles";

const phoneNumber = '972525659084';
const message = 'הגענו מהאתר שלך, נשמח לשוחח!';

const Container = styled.div`
	flex-direction: row;
	flex: 1;
	justify-content: center;
	text-align: center;
`;

const ColorButton = withStyles(theme => ({
    root: {
        color: "white",
        flex: 1,
        width: "80%",
        height: "50px",
        backgroundColor: "#DB898B",
        '&:hover': {
            backgroundColor: darken("#DB898B", 0.1),
        },
    },
}))(Button);

const ContactUs = () => {
    const whatsAppLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    return (
        <Container>
            <ColorButton variant="contained" color={lightGreen[600]} target="_blank" href={whatsAppLink}>
                <WhatsAppIcon fontSize="large" style={{marginLeft: "10px", color: "white"}}/>
                <Typography variant={"h6"} style={{color: "white"}}>צור קשר</Typography>
            </ColorButton>
        </Container>
    );
};

export default ContactUs;
