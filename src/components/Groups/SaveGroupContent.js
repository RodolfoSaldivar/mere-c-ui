import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import useWords from '../../helpers/words';
import AvatarImageAction from '../Common/AvatarImageAction';
import * as groupsActions from '../../actions/groupsActions';
import SaveScheduleContent from '../Schedules/SaveScheduleContent';

//================================================

// const useStyles = makeStyles((theme) => ({

// }));

//================================================

const SaveGroupContent = (props) => {
	// const classes = useStyles();
	const words = useWords();

	//----> Calls to groupsActions
	const handleName = (event) => props.setName(event.target.value);

	//----> Component
	return (
		<Grid container spacing={3} component="form" autoComplete="off">
			{/* Avatar */}
			<Grid item xs={12}>
				<Grid container justify="center" alignItems="center">
					<AvatarImageAction
						size={150}
						actionIcon={AddAPhotoIcon}
						parentName="SaveGroupContent"
					/>
				</Grid>
			</Grid>

			<Grid item xs={12}>
				<TextField
					fullWidth
					label={words.name}
					value={props.name}
					onChange={handleName}
				/>
			</Grid>

			<Grid item xs={12}>
				<Typography variant="h6">{words.defaultSchedule}</Typography>
			</Grid>

			<Grid item xs={12}>
				<SaveScheduleContent />
			</Grid>
		</Grid>
	);
};

//================================================

SaveGroupContent.propTypes = {
	// From groupsReducer
	name: PropTypes.string.isRequired,
	// From groupsActions
	setName: PropTypes.func.isRequired
};

const mapStateToProps = ({ groupsReducer }) => groupsReducer;

export default connect(mapStateToProps, groupsActions)(SaveGroupContent);
