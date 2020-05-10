import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import useWords from '../../helpers/words';
import VerticalDivider from '../Common/VerticalDivider';
import { STARTED_AS_MOBILE } from '../../helpers/constants';

//================================================

const maxHeight = 175;

const useStyles = makeStyles((theme) => ({
	img: {
		maxWidth: '100%',
		maxHeight: maxHeight
	},
	imgContainer: {
		display: 'flex',
		height: maxHeight,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: theme.spacing(1)
	},
	expPanRoot: {
		marginBottom: theme.spacing(2),
		borderRadius: 4,
		'&:before': {
			backgroundColor: 'transparent'
		}
	},
	iconButton: {
		backgroundColor: fade(theme.palette.secondary.main, 0.4),
		'&:hover': {
			backgroundColor: fade(theme.palette.secondary.main, 0.2)
		}
	}
}));

//================================================

const groups = [
	{
		name: 'Group 1',
		points: 69,
		rewards: [
			{
				points: 13,
				name: 'Reward name',
				src:
					'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_weight_other/1800x1200_cat_weight_other.jpg?resize=600px:*'
			},
			{
				points: 23,
				name: 'Cat',
				src:
					'https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg'
			},
			{
				points: 33,
				name: 'Another',
				src: 'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'
			}
		]
	}
];

//================================================

const GroupRewardsSummary = () => {
	const classes = useStyles();
	const words = useWords();

	return (
		<div>
			{groups.map((group, key) => (
				<ExpansionPanel
					key={key}
					elevation={3}
					className={classes.expPanRoot}
					defaultExpanded={!STARTED_AS_MOBILE}
				>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						classes={{
							expandIcon: classes.iconButton
						}}
					>
						<Grid container component={Typography} variant="h6" noWrap>
							{group.name}
							<VerticalDivider />
							<b>
								{group.points} {words.points}
							</b>
						</Grid>
					</ExpansionPanelSummary>

					{/* Rewards */}
					<Grid container spacing={2} component={ExpansionPanelDetails}>
						{group.rewards.map((reward, key) => (
							<Grid key={key} item xs={12} sm={6} md={3} align="center">
								<div className={classes.imgContainer}>
									<img alt="" src={reward.src} className={classes.img} />
								</div>
								<Typography>
									{`${reward.name}: `}
									<b>
										{reward.points} {words.points}
									</b>
								</Typography>
							</Grid>
						))}
					</Grid>
				</ExpansionPanel>
			))}
		</div>
	);
};

//================================================

export default GroupRewardsSummary;
