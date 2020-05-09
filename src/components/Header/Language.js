//----> Countries flag icons at:
//----> https://www.countryflags.com/en/icons-overview/
import React from 'react';
import { useCookies } from 'react-cookie';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import mexFlag from '../../img/mexFlag.png';
import usaFlag from '../../img/usaFlag.png';
import { COOKIE_DURATION } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	button: {
		minWidth: 0,
		textTransform: 'none'
	},
	avatar: {
		width: theme.spacing(4),
		height: theme.spacing(4),
		backgroundColor: 'white',
		padding: theme.spacing(0.5),
		marginRight: theme.spacing(0.5)
	}
}));

const langOptions = [
	{ country: 'MX', text: 'Español', flag: mexFlag },
	{ country: 'US', text: 'English', flag: usaFlag }
];

//================================================

const Language = () => {
	const classes = useStyles();
	const [selected, setSelected] = React.useState('');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [cookies, setCookie] = useCookies(['language']);

	//----> If cookie, set to that language; else, default to MX
	const didMount = () => {
		if (cookies.language) setSelected(cookies.language);
		else updateCookieTo('MX');
	};
	React.useEffect(didMount, []);

	//----> Sets the cookie value
	const updateCookieTo = (country) => {
		setSelected(country);
		setCookie('language', country, {
			path: '/',
			maxAge: COOKIE_DURATION
		});
	};

	//----> When language button is clicked
	const openMenu = (event) => setAnchorEl(event.currentTarget);

	//----> When language interaction finishes
	const closeMenu = (country = null) => () => {
		setAnchorEl(null); // Closes the options
		if (!country) return; // If users click outside the area
		updateCookieTo(country);
	};

	//----> Displays selected lang information
	const displaySelectedLang = () => {
		const lang = langOptions.find((lang) => lang.country === selected);
		if (!lang) return ''; // Before component did mount
		return (
			<Grid container alignItems="center">
				<Avatar src={lang.flag} className={classes.avatar} />
				<Hidden xsDown>{lang.text}</Hidden>
			</Grid>
		);
	};

	//----> Component
	return (
		<div>
			<Button color="inherit" onClick={openMenu} className={classes.button}>
				{displaySelectedLang()}
			</Button>
			<Menu
				keepMounted
				open={!!anchorEl} // Converts to boolean
				anchorEl={anchorEl}
				onClose={closeMenu()}
			>
				{langOptions.map((lang, key) => (
					<MenuItem key={key} onClick={closeMenu(lang.country)}>
						<Avatar src={lang.flag} className={classes.avatar} />
						{lang.text}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

//================================================

export default Language;
