import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import useWords from '../../helpers/words';
import SaveGroup from '../Groups/SaveGroup';
import * as usersActions from '../../actions/usersActions';
import AvatarImageAction from '../Common/AvatarImageAction';

//================================================

const useStyles = makeStyles((theme) => ({
	multiLine: {
		whiteSpace: 'normal'
	},
	newGroup: {
		color: theme.palette.secondary.dark
	},
	chipsContainer: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2,
		height: 'auto',
		padding: '5px 0'
	},
	select: {
		'&:focus': {
			backgroundColor: 'transparent'
		}
	}
}));

const groupOptions = ['Group 1', 'Rroup 2', 'Sroup 3', 'Hroup 4'];

//================================================

const SaveUserContent = (props) => {
	const classes = useStyles();
	const words = useWords();
	const [selectOpen, setSelectOpen] = React.useState(false);

	//----> Calls to usersActions
	const handleName = (event) => props.setName(event.target.value);
	const handleMail = (event) => props.setMail(event.target.value);
	const handleLastname = (event) => props.setLastname(event.target.value);
	const handlePassword = (event) => props.setPassword(event.target.value);
	const handleGroups = (event) => {
		const { value: selected } = event.target;
		// If last option of array is "New Group" (-1)
		if (_.last(selected) < 0) {
			document.getElementById('saveUser_saveGroupTrigger').click();
			return;
		}
		setSelectOpen(false);
		props.setGroups(selected);
	};

	//----> Component
	return (
		<Grid container spacing={3} component="form" autoComplete="off">
			{/* Avatar */}
			<Grid item xs={12}>
				<Grid container justify="center" alignItems="center">
					<AvatarImageAction size={150} actionIcon={AddAPhotoIcon} />
				</Grid>
			</Grid>

			{/* Normal inputs */}
			<Grid item xs={12} sm={6}>
				<TextField
					fullWidth
					label={words.name}
					value={props.name}
					onChange={handleName}
				/>
			</Grid>

			<Grid item xs={12} sm={6}>
				<TextField
					fullWidth
					label={words.lastname}
					value={props.lastname}
					onChange={handleLastname}
				/>
			</Grid>

			<Grid item xs={12} sm={6}>
				<TextField
					fullWidth
					label={words.mail}
					value={props.mail}
					onChange={handleMail}
				/>
			</Grid>

			<Grid item xs={12} sm={6}>
				<TextField
					fullWidth
					label={words.password}
					value={props.password}
					onChange={handlePassword}
				/>
			</Grid>

			{/* Groups */}
			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel id="saveUser_groupField">{words.groups}</InputLabel>
					<Select
						multiple
						open={selectOpen}
						value={props.groups}
						onChange={handleGroups}
						labelId="saveUser_groupField"
						onOpen={() => setSelectOpen(true)}
						onClose={() => setSelectOpen(false)}
						classes={{
							select: classes.select
						}}
						renderValue={(selected) => (
							<div className={classes.chipsContainer}>
								{selected.map((value) => (
									<Chip
										key={value}
										label={value}
										className={classes.chip}
										classes={{ label: classes.multiLine }}
									/>
								))}
							</div>
						)}
					>
						<MenuItem value={-1} className={classes.newGroup}>
							{words.new} {words.group}
						</MenuItem>
						{groupOptions.map((name) => (
							<MenuItem key={name} value={name} className={classes.multiLine}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				{/* Opens save group modal by triggering the click */}
				<SaveGroup>
					<div id="saveUser_saveGroupTrigger" />
				</SaveGroup>
			</Grid>
		</Grid>
	);
};

//================================================

SaveUserContent.propTypes = {
	// From usersReducer
	name: PropTypes.string.isRequired,
	mail: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	groups: PropTypes.arrayOf(PropTypes.string).isRequired,
	// From usersActions
	setName: PropTypes.func.isRequired,
	setMail: PropTypes.func.isRequired,
	setGroups: PropTypes.func.isRequired,
	setLastname: PropTypes.func.isRequired,
	setPassword: PropTypes.func.isRequired
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(SaveUserContent);
