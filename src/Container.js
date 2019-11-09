import React, {Fragment} from 'react';
import DesktopLayout from "./desktop/DesktopLayout";
import MobileLayout from "./mobile/MobileLayout";
import {useMediaQuery, useTheme} from "@material-ui/core";

function Container() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Fragment>
			{isDesktop &&
			<DesktopLayout/>
			}
			{!isDesktop &&
			<MobileLayout/>
			}
		</Fragment>
	);
}

export default Container;
