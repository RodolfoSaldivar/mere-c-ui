import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DynamicAvatar from '../Common/DynamicAvatar';
import { useIsMobile } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15)
	},
	divider: {
		height: 30,
		margin: '0 13px'
	},
	badge: {
		height: 'auto',
		borderRadius: 15,
		padding: 0
	}
}));

//================================================

const UserSummary = () => {
	const classes = useStyles();
	const isMobile = useIsMobile();

	return (
		<Grid container alignItems="center" spacing={2}>
			<Grid item xs={12} sm={3} md={2}>
				<Grid container justify="center">
					<DynamicAvatar />
				</Grid>
			</Grid>

			<Grid item xs={12} sm={9} md={10}>
				{/* User fullname */}
				<Typography variant="h4" gutterBottom align={isMobile ? 'center' : 'left'}>
					Firstname Middlename Lastname
				</Typography>

				{/* User groups */}
				<Typography variant="h6">
					<Grid
						container
						alignItems="center"
						justify={isMobile ? 'center' : 'flex-start'}
					>
						Group 1
						<Divider orientation="vertical" className={classes.divider} />
						Group 2
						<Divider orientation="vertical" className={classes.divider} />
						Group 3
					</Grid>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default UserSummary;
