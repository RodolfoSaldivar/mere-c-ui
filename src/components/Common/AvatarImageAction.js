import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import {
	useIsMobile,
	ZOOM_BG_COLOR,
	MAX_IMAGE_SIZE,
	IMAGE_SIZE_ERROR
} from '../../helpers/constants';

//================================================

const deadpool = 'https://media.heartlandtv.com/images/Pool1.PNG';

const useStyles = makeStyles(() => ({
	label: {
		height: 24
	},
	badge: {
		padding: 0,
		height: 'auto',
		borderRadius: 15
	},
	img: {
		width: '100%',
		height: '100%',
		textIndent: 10000,
		objectFit: 'cover',
		textAlign: 'center',
		color: 'transparent'
	}
}));

//================================================

const AvatarImageAction = (props) => {
	const classes = useStyles();
	const isMobile = useIsMobile();
	const [image, setImage] = React.useState(null);

	//----> Handles image preview
	const imageChange = (event) => {
		const [image] = event.target.files;

		if (!image) return;
		if (image.size > MAX_IMAGE_SIZE) return alert(IMAGE_SIZE_ERROR);

		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onloadend = () => setImage(reader.result);
	};

	//----> Component
	return (
		<Badge
			overlap="circle"
			color="secondary"
			classes={{ badge: classes.badge }}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			badgeContent={
				<IconButton size="small">
					<input
						hidden
						type="file"
						accept="image/*"
						id="dynamicImageInput"
						onChange={imageChange}
					/>
					<label htmlFor="dynamicImageInput" className={classes.label}>
						<props.actionIcon />
					</label>
				</IconButton>
			}
		>
			<Zoom zoomMargin={isMobile ? 10 : 100} overlayBgColorEnd={ZOOM_BG_COLOR}>
				<Avatar
					src={image || deadpool}
					style={{ width: props.size, height: props.size }}
				/>
			</Zoom>
		</Badge>
	);
};

//================================================

AvatarImageAction.propTypes = {
	// From parent <UserSummary />
	size: PropTypes.number.isRequired, // Pixels
	actionIcon: PropTypes.any.isRequired // Material Icon
};

export default AvatarImageAction;
