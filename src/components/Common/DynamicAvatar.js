import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import { MAX_IMAGE_SIZE, IMAGE_SIZE_ERROR } from '../../helpers/constants';

//================================================

const deadpool = 'https://media.heartlandtv.com/images/Pool1.PNG';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15)
	},
	badge: {
		height: 'auto',
		borderRadius: 15,
		padding: 0
	},
	label: {
		height: 24
	}
}));

//================================================

const DynamicAvatar = () => {
	const classes = useStyles();
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
						id="group_form_image"
						onChange={imageChange}
					/>
					<label htmlFor="group_form_image" className={classes.label}>
						<EditIcon />
					</label>
				</IconButton>
			}
		>
			<Avatar src={image || deadpool} className={classes.avatar} />
		</Badge>
	);
};

//================================================

export default DynamicAvatar;
