import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Menu from './Menu';
import Language from './Language';
import { APP_NAME, PATHS } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	root: {
		...theme.forAllApp,
		flexGrow: 1
	}
}));

//================================================

const Header = () => {
	const classes = useStyles();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
					{/* Menu button */}
					<IconButton
						color="inherit"
						onClick={openMenu}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>

					{/* Title */}
					<Typography variant="h5" className={classes.title}>
						<Link to={PATHS.home}>{APP_NAME}</Link>
					</Typography>

					{/* Language */}
					<Language />

					{/* Icon buttons */}
					<IconButton color="inherit">
						<NotificationsIcon />
					</IconButton>
					<IconButton color="inherit">
						<AccountCircleIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Menu as slider */}
			<Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
		</div>
	);
};

//================================================

export default Header;
