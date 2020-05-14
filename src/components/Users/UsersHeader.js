import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import useWords from '../../helpers/words';

//================================================

const useStyles = makeStyles((theme) => ({
	title: {
		marginRight: theme.spacing(3)
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(2)
	}
}));

//================================================

const UsersHeader = (props) => {
	const classes = useStyles();
	const words = useWords();

	return (
		<Hidden {...props.hidden}>
			<div className={classes.header}>
				<Typography variant="h5" className={classes.title}>
					{words.users}
				</Typography>
				<Fab size="small" color="secondary">
					<AddIcon />
				</Fab>
			</div>
		</Hidden>
	);
};

//================================================

// Full props at: https://material-ui.com/api/hidden/#props
UsersHeader.propTypes = {
	// From parent <Users />
	hidden: PropTypes.shape({
		smUp: PropTypes.bool,
		xsDown: PropTypes.bool
	})
};

export default UsersHeader;
