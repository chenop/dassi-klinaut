import React from 'react';
import styled from "@emotion/styled";
import IconButton from "@material-ui/core/IconButton";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Typography, withStyles} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import {lightGreen, red} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import {darken} from "@material-ui/core/styles";

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
    return (
        <Container>
            <ColorButton variant="contained" color={lightGreen[600]}>
                <WhatsAppIcon fontSize="large" style={{marginLeft: "10px", color: "white"}}/>
                <Typography variant={"h6"} style={{color: "white"}}>צור קשר</Typography>
            </ColorButton>
            {/*<Fab variant="extended" aria-label="like" >*/}
            {/*    <WhatsAppIcon fontSize="large" style={{marginLeft: "10px", color: lightGreen[400]}}/>*/}
            {/*    <Typography variant={"h6"} style={{color: lightGreen[600]}}>צור קשר</Typography>*/}
            {/*</Fab>*/}
            {/*<IconButton aria-label="Lets talk on WhatsApp!">*/}
            {/*    <WhatsAppIcon fontSize="large" />*/}
            {/*    <Typography variant={"h6"}>מוזמנים לקשקש</Typography>*/}
            {/*</IconButton>*/}
            {/*<IconButton aria-label="Lets talk on Facebook!">*/}
            {/*    <FacebookIcon fontSize="large" />*/}
            {/*</IconButton>*/}
        </Container>
    );
};

export default ContactUs;
