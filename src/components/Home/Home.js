import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import UserSummary from './UserSummary';
import GroupRewardsSummary from './GroupRewardsSummary';

//================================================

const useStyles = makeStyles((theme) => ({
	userInfo: {
		padding: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
}));

//================================================

const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<Paper elevation={3} className={classes.userInfo}>
				<UserSummary />
			</Paper>

			<GroupRewardsSummary />
		</div>
	);
};

//================================================

export default Home;
