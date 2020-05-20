import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';

import { useIsMobile } from '../../helpers/constants';
import VerticalDivider from '../Common/VerticalDivider';
import AvatarImageAction from '../Common/AvatarImageAction';

//================================================

const groups = ['Group 1', 'Group 2', 'Group 3'];

//================================================

const UserSummary = () => {
	const isMobile = useIsMobile();

	return (
		<Grid container alignItems="center" spacing={2}>
			<Grid item xs={12} sm={3} md={2}>
				<Grid container justify="center">
					<AvatarImageAction
						size={120}
						actionIcon={EditIcon}
						parentName="UserSummary"
					/>
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
						{groups.map((name, key) => {
							const isLast = key === groups.length - 1;
							return (
								<Box key={key} display="flex">
									{name}
									{!isLast ? <VerticalDivider /> : ''}
								</Box>
							);
						})}
					</Grid>
				</Typography>
			</Grid>
		</Grid>
	);
};

//================================================

export default UserSummary;
