import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

//================================================

const primary = '#9C27B0';
const secondary = '#00E676';

const appTheme = (theme) =>
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
			'-webkit-tap-highlight-color': 'transparent',
			'& a': {
				color: 'inherit',
				textDecoration: 'none'
			}
		},
		dialogModal: {
			margin: 15,
			width: 'calc(100% - 30px)',
			maxHeight: 'calc(100% - 30px)'
		},
		modalCloseButton: {
			position: 'absolute',
			top: theme.spacing(1),
			right: theme.spacing(1),
			color: theme.palette.grey[500]
		},
		bgcSecondaryFade: {
			color: 'rgba(0, 0, 0, 0.5)',
			backgroundColor: fade(secondary, 0.2),
			'&:hover': {
				backgroundColor: fade(secondary, 0.1)
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
