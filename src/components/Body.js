import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//================================================

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		...theme.forAllApp,
		flexGrow: 1,
		margin: theme.spacing(2, 0)
	}
}));

//================================================

const Body = (props) => {
	const { children } = props;
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<div className={classes.toolbar} />
			<Container>{children}</Container>
		</div>
	);
};

//================================================

Body.propTypes = {
	// From parent <App />
	children: PropTypes.node.isRequired
};

export default Body;
