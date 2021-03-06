import React from 'react';
import DesktopLayout from "./desktop/DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";
import {useMediaQuery, useTheme} from "@material-ui/core";
import {Context} from "./Context";
import styled from '@emotion/styled';

const UiContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: ${props => props.isDesktop ? "hidden" : "auto"} ;
`;

function Container() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	const state = {
		isDesktop
	};

	return (
		<Context.Provider value={state}>
			<UiContainer isDesktop={isDesktop}>
			{isDesktop &&
			<DesktopLayout/>
			}
			{!isDesktop &&
			<MobileLayout/>
			}
			</UiContainer>
		</Context.Provider>
	);
}

export default Container;
