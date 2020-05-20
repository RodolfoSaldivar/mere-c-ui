import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

import useWords from '../../helpers/words';
import * as schedulesActions from '../../actions/schedulesActions';

//================================================

const inText = { margin: '5px 5px 3px 5px' };

const useStyles = makeStyles((theme) => ({
	divs: { marginRight: 5 },
	cicleInput: { ...inText, width: 90 },
	pointsInput: { ...inText, width: 50 },
	descriptionInput: { ...inText, width: 290, marginLeft: 0 },
	checkbox: { color: theme.palette.secondary.dark + '!important' },
	multipleSelect: { ...inText, maxWidth: '90%', textAlign: 'center' }
}));

//================================================

// Days Initials =		M, T, W, T, F, S, S
const weekDayNumbers = [0, 1, 2, 3, 4, 5, 6];

const monthDayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
monthDayNumbers.push(11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
monthDayNumbers.push(21, 22, 23, 24, 25, 26, 27, 28);

//================================================

const SaveScheduleContent = (props) => {
	const classes = useStyles();
	const words = useWords();

	//----> Action calls to the reducer
	const handleCicle = (event) => props.setCicle(event.target.value);
	const handleWeekDays = (event) => props.setWeekDays(event.target.value);
	const handleMonthDays = (event) => props.setMonthDays(event.target.value);
	const handleDescription = (event) => props.setDescription(event.target.value);
	const handlePoints = (event) => {
		let { value } = event.target;
		if (value < 1) value = '';
		props.setPoints(value);
	};

	//----> Creates an array of day names and joins them
	const displayWeekDayNames = (selected) =>
		selected.map((nameKey) => words.dayNames[nameKey]).join(', ');

	//----> Component
	return (
		<Grid container>
			{/* Description */}
			<div className={classes.divs}>
				<span className={classes.divs}>{words.scheduleCalled}</span>
				<Input
					// error
					multiline
					value={props.description}
					onChange={handleDescription}
					className={classes.descriptionInput}
				/>
			</div>

			{/* Points */}
			<div className={classes.divs}>
				{words.willGive}
				<Input
					type="number"
					value={props.points}
					onChange={handlePoints}
					className={classes.pointsInput}
				/>
				{props.points === '1'
					? words.point.toLowerCase()
					: words.points.toLowerCase()}
			</div>

			{/* Week Days */}
			{props.cicle === 'W' && (
				<div className={classes.divs}>
					{words.every}
					<Select
						multiple
						value={props.weekDays}
						onChange={handleWeekDays}
						renderValue={displayWeekDayNames}
						className={classes.multipleSelect}
					>
						{weekDayNumbers.map((nameKey) => (
							<MenuItem key={nameKey} value={nameKey}>
								<Checkbox
									checked={props.weekDays.indexOf(nameKey) > -1}
									classes={{
										checked: classes.checkbox
									}}
								/>
								<ListItemText primary={words.dayNames[nameKey]} />
							</MenuItem>
						))}
					</Select>
				</div>
			)}

			{/* Month Days */}
			{props.cicle === 'M' && (
				<div className={classes.divs}>
					{words.every}
					<Select
						multiple
						value={props.monthDays}
						onChange={handleMonthDays}
						className={classes.multipleSelect}
						renderValue={(selected) => selected.join(', ')}
					>
						{monthDayNumbers.map((day) => (
							<MenuItem key={day} value={day}>
								<Checkbox
									checked={props.monthDays.indexOf(day) > -1}
									classes={{
										checked: classes.checkbox
									}}
								/>
								<ListItemText primary={day} />
							</MenuItem>
						))}
					</Select>
				</div>
			)}

			{/* Cicle */}
			<div className={classes.divs}>
				{props.cicle === 'D' && words.every}
				{props.cicle === 'W' && words.ofTheWeek}
				{props.cicle === 'M' && words.ofTheMonth}
				<Select
					value={props.cicle}
					onChange={handleCicle}
					className={classes.cicleInput}
				>
					<MenuItem value="D">{words.day}</MenuItem>
					<MenuItem value="W">{words.week}</MenuItem>
					<MenuItem value="M">{words.month}</MenuItem>
				</Select>
			</div>
		</Grid>
	);
};

//================================================

SaveScheduleContent.propTypes = {
	// From schedulesReducer
	cicle: PropTypes.string.isRequired,
	points: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	weekDays: PropTypes.arrayOf(PropTypes.number).isRequired,
	monthDays: PropTypes.arrayOf(PropTypes.number).isRequired,
	// From schedulesActions
	setCicle: PropTypes.func.isRequired,
	setPoints: PropTypes.func.isRequired,
	setWeekDays: PropTypes.func.isRequired,
	setMonthDays: PropTypes.func.isRequired,
	setDescription: PropTypes.func.isRequired
};

const mapStateToProps = ({ schedulesReducer }) => schedulesReducer;

export default connect(mapStateToProps, schedulesActions)(SaveScheduleContent);
