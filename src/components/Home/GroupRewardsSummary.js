import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import useWords from '../../helpers/words';
import VerticalDivider from '../Common/VerticalDivider';
import { STARTED_AS_MOBILE } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	expPanRoot: {
		marginBottom: theme.spacing(2),
		borderRadius: 4,
		'&:before': {
			backgroundColor: 'transparent'
		}
	}
}));

//================================================

const GroupRewardsSummary = () => {
	const classes = useStyles();
	const words = useWords();

	return (
		<div>
			<ExpansionPanel
				elevation={3}
				className={classes.expPanRoot}
				defaultExpanded={!STARTED_AS_MOBILE}
			>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Grid container component={Typography} variant="h6" noWrap>
						Group 1
						<VerticalDivider />
						<b>50 {words.points}</b>
					</Grid>
				</ExpansionPanelSummary>

				<ExpansionPanelDetails>
					<Typography variant="h6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

//================================================

export default GroupRewardsSummary;
