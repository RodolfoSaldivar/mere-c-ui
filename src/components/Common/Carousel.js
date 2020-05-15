import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Carousel, { consts } from 'react-elastic-carousel';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { useIsMobile, ZOOM_BG_COLOR } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	iconButton: theme.bgcSecondaryFade,
	img: {
		maxHeight: 175,
		maxWidth: '100%'
	},
	arrowsContainer: {
		width: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		'& button': {
			outline: 'none'
		},
		'& .rec-pagination': {
			margin: '5px 0'
		},
		'& .rec-slider': {
			display: 'flex',
			alignItems: 'center'
		},
		'& .rec-dot_active': {
			boxShadow: 'none !important',
			backgroundColor: theme.palette.secondary.main
		},
		'& .rec-dot': {
			boxShadow: 'none',
			border: `1px solid ${theme.palette.secondary.main}`,
			'&:hover': {
				boxShadow: `0 0 1px 3px ${fade(theme.palette.secondary.main, 0.5)}`
			}
		}
	}
}));

//================================================

export const InternalCarousel = (props) => {
	const classes = useStyles();
	const { items } = props;
	const isMobile = useIsMobile();

	//----> Custom arrows
	// https://sag1v.github.io/react-elastic-carousel/renderArrow
	const customArrows = (event) => {
		const icon = event.type === consts.PREV ? <LeftIcon /> : <RightIcon />;
		return (
			<div className={classes.arrowsContainer}>
				<IconButton
					size="small"
					disableRipple
					onClick={event.onClick}
					className={classes.iconButton}
				>
					{icon}
				</IconButton>
			</div>
		);
	};

	//----> Actual component
	return (
		<Carousel itemsToShow={1} renderArrow={customArrows} className={classes.container}>
			{items.map((src, key) => (
				<Zoom
					key={key}
					zoomMargin={isMobile ? 10 : 100}
					overlayBgColorEnd={ZOOM_BG_COLOR}
				>
					<img alt="" src={src} className={classes.img} />
				</Zoom>
			))}
		</Carousel>
	);
};

//================================================

InternalCarousel.propTypes = {
	// From parents:
	// <RewardsModalViewContent />
	items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InternalCarousel;
