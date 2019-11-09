import React from 'react';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles';
import {blue, purple} from "@material-ui/core/colors";
import Container from "./Container";

function App() {
	const theme = createMuiTheme({
	    palette: {
	        primary: purple,
	        secondary: blue
	    }
	});

	return (
		<ThemeProvider theme={theme}>
			<Container/>
		</ThemeProvider>
	);
}

export default App;
