import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// Material Icons
import Redeem from '@material-ui/icons/Redeem';
import History from '@material-ui/icons/History';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PersonOutline from '@material-ui/icons/PersonOutline';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import TodayOutlined from '@material-ui/icons/TodayOutlined';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

import useWords from '../../helpers/words';
import { PATHS, APP_NAME, IS_IOS } from '../../helpers/constants';

//================================================

const useStyles = makeStyles(() => ({
	list: { width: 250 },
	title: { justifyContent: 'center' }
}));

//================================================

const listOptions = (words) => [
	{ text: words.home, to: PATHS.home, icon: HomeOutlined },
	{ text: words.users, to: PATHS.users, icon: PersonOutline },
	{ text: words.groups, to: PATHS.groups, icon: GroupOutlined },
	{ text: words.rewards, to: PATHS.rewards, icon: Redeem },
	{ text: words.requests, to: PATHS.requests, icon: ShoppingCartOutlined },
	{ text: words.history, to: PATHS.history, icon: History },
	{ text: words.permissions, to: PATHS.permissions, icon: FormatListBulleted },
	{ text: words.schedules, to: PATHS.schedules, icon: TodayOutlined }
];

//================================================

const Menu = (props) => {
	const classes = useStyles();
	const { isMenuOpen, closeMenu } = props;
	const words = useWords();

	return (
		<SwipeableDrawer
			open={isMenuOpen}
			disableSwipeToOpen
			onOpen={() => null} // Avoid console error
			onClose={closeMenu}
			disableDiscovery={IS_IOS}
			disableBackdropTransition={!IS_IOS}
			ModalProps={{
				keepMounted: true // Better open performance on mobile.
			}}
		>
			<Toolbar className={classes.title}>
				<Typography variant="h5">{APP_NAME}</Typography>
			</Toolbar>

			<Divider />

			<List className={classes.list} onClick={closeMenu}>
				{listOptions(words).map((option, key) => (
					<ListItem button key={key} component={Link} to={option.to}>
						<ListItemIcon>
							<option.icon />
						</ListItemIcon>
						<ListItemText primary={option.text} />
					</ListItem>
				))}
			</List>
		</SwipeableDrawer>
	);
};

//================================================

Menu.propTypes = {
	//From parent <Header />
	closeMenu: PropTypes.func.isRequired,
	isMenuOpen: PropTypes.bool.isRequired
};

export default Menu;
