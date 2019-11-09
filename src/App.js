import React from 'react';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles';
import {blue, grey, purple} from "@material-ui/core/colors";
import Container from "./Container";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {
	const theme = createMuiTheme({
		direction: 'rtl',
	    palette: {
	        primary: purple,
	        secondary: grey
	    },
		typography: {
			// Use the system font instead of the default Roboto font.
			fontFamily: [
				'Assistant'
			]
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<StylesProvider jss={jss}>
				<Container/>
			</StylesProvider>
		</ThemeProvider>
	);
}

export default App;
