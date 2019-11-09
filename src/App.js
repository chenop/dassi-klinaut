import React from 'react';
import {useMediaQuery, useTheme} from "@material-ui/core";
import styled from '@emotion/styled'
import DesktopLayout from "./desktop/DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";

const Container = styled.div`
`;

function App() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container>
            {isDesktop &&
                <DesktopLayout />
            }
            {!isDesktop &&
                <MobileLayout />
            }
        </Container>
    );
}

export default App;
