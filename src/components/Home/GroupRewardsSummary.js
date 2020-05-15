import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import useWords from '../../helpers/words';
import VerticalDivider from '../Common/VerticalDivider';
import RewardsModalView from '../Rewards/RewardsModalView';
import { PATHS, STARTED_AS_MOBILE } from '../../helpers/constants';

//================================================

const maxHeight = 175;

const useStyles = makeStyles((theme) => ({
	iconButton: theme.bgcSecondaryFade,
	img: {
		maxWidth: '100%',
		maxHeight: maxHeight
	},
	skeleton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: theme.spacing(1),
		color: 'rgba(0, 0, 0, 0.4) !important'
	},
	imgContainer: {
		display: 'flex',
		height: maxHeight,
		cursor: 'pointer',
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
	const hasOnlyOneGroup = groups.length === 1;

	return (
		<div>
			{groups.map((group, key) => (
				<ExpansionPanel
					key={key}
					elevation={3}
					className={classes.expPanRoot}
					defaultExpanded={!STARTED_AS_MOBILE || hasOnlyOneGroup}
				>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						IconButtonProps={{
							size: 'small'
						}}
						classes={{
							expandIcon: classes.iconButton
						}}
					>
						<Grid container component={Typography} variant="h6">
							{group.name}
							<VerticalDivider />
							<b>
								{group.points} {words.points.toLowerCase()}
							</b>
						</Grid>
					</ExpansionPanelSummary>

					{/* //================================================ */}

					<Grid container spacing={2} component={ExpansionPanelDetails}>
						{/* Just 3 rewards */}
						{group.rewards.map((reward, key) => (
							<Grid key={key} item xs={12} sm={6} md={3} align="center">
								<div className={classes.imgContainer}>
									<RewardsModalView>
										<img alt="" src={reward.src} className={classes.img} />
									</RewardsModalView>
								</div>
								<Typography>
									{`${reward.name}: `}
									<b>
										{reward.points} {words.points.toLowerCase()}
									</b>
								</Typography>
							</Grid>
						))}

						{/* //================================================ */}

						{/* Then the skeleton */}
						<Grid item xs={12} sm={6} md={3} align="center">
							<Skeleton
								width={'70%'}
								variant="rect"
								component={Link}
								to={PATHS.rewards}
								height={maxHeight}
								className={classes.skeleton}
							>
								{words.more}
							</Skeleton>
							<Skeleton variant="text" width={'40%'} />
						</Grid>
					</Grid>
				</ExpansionPanel>
			))}
		</div>
	);
};

//================================================

export default GroupRewardsSummary;
