import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Menu from './Menu';
import Language from './Language';
import { APP_NAME, PATHS } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	root: theme.forAllApp,
	title: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		backgroundColor: 'white',
		color: theme.palette.primary.main
	}
}));

//================================================

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.root}>
			<Toolbar>
				{/* Menu button */}
				<Menu>
					<IconButton color="inherit" className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
				</Menu>

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
					<Avatar src={'' /* user image url*/} className={classes.avatar} />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

//================================================

export default Header;
