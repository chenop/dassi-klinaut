import React, {Fragment} from 'react';
import DesktopLayout from "./desktop/DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";
import {useMediaQuery, useTheme} from "@material-ui/core";
import {Context} from "./Context";

function Container() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	const state = {
		isDesktop
	};

	return (
		<Context.Provider value={state}>
			{isDesktop &&
			<DesktopLayout/>
			}
			{!isDesktop &&
			<MobileLayout/>
			}
		</Context.Provider>
	);
}

export default Container;
