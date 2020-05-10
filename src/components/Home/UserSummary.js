import React from 'react';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';

import DynamicAvatar from '../Common/DynamicAvatar';
import { useIsMobile } from '../../helpers/constants';
import VerticalDivider from '../Common/VerticalDivider';

//================================================

const UserSummary = () => {
	const isMobile = useIsMobile();

	return (
		<Grid container alignItems="center" spacing={2}>
			<Grid item xs={12} sm={3} md={2}>
				<Grid container justify="center">
					<DynamicAvatar size={120} actionIcon={EditIcon} />
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
						<VerticalDivider />
						Group 2
						<VerticalDivider />
						Group 3
					</Grid>
				</Typography>
			</Grid>
		</Grid>
	);
};

//================================================

export default UserSummary;
