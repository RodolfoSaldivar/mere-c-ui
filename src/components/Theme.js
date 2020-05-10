import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';

//================================================

const primary = '#9C27B0';
const secondary = '#00E676';

const appTheme = (/*theme*/) =>
	createMuiTheme({
		palette: {
			primary: {
				main: primary
			},
			secondary: {
				main: secondary
			},
			error: {
				main: '#F44336'
			},
			background: {
				default: '#F5F5F5'
			}
		},
		forAllApp: {
			'& button': {
				outline: 'none'
			},
			'& a': {
				color: 'inherit',
				textDecoration: 'none'
			}
		}
	});

//================================================

const Theme = ({ children }) => (
	<ThemeProvider theme={appTheme(createMuiTheme())}>
		<CssBaseline />
		{children}
	</ThemeProvider>
);

//================================================

Theme.propTypes = {
	// From parent <App />
	children: PropTypes.node.isRequired
};

export default Theme;
