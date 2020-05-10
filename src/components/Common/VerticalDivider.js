import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

//================================================

const useStyles = makeStyles(() => ({
	divider: {
		height: 30,
		margin: '0 12px',
		backgroundColor: 'rgba(0, 0, 0, 0.2)'
	}
}));

//================================================

const VerticalDivider = () => {
	const classes = useStyles();
	return <Divider orientation="vertical" className={classes.divider} />;
};

//================================================

export default VerticalDivider;
