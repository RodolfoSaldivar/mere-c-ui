import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import useWords from '../../helpers/words';
import RewardsModalViewContent from './RewardsModalViewContent';

//================================================

const useStyles = makeStyles((theme) => ({
	dialogModal: theme.dialogModal,
	modalCloseButton: theme.modalCloseButton,
	marginRight: { marginRight: theme.spacing(5) },
	dialogContent: {
		padding: theme.spacing(2, 3)
	}
}));

//================================================

const RewardsModalView = (props) => {
	const classes = useStyles();
	const words = useWords();
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<div>
			<div onClick={openModal}>{props.children}</div>
			<Dialog
				open={open}
				maxWidth="sm"
				onClose={closeModal}
				PaperProps={{ className: classes.dialogModal }}
			>
				{/*//================================================*/}

				<Grid component={DialogTitle} container alignItems="center" disableTypography>
					<Grid item xs={11}>
						<Typography variant="h5">Reward name</Typography>
					</Grid>
					<IconButton className={classes.modalCloseButton} onClick={closeModal}>
						<CloseIcon />
					</IconButton>
				</Grid>

				{/*//================================================*/}

				<DialogContent dividers className={classes.dialogContent}>
					<RewardsModalViewContent />
				</DialogContent>

				{/*//================================================*/}

				<DialogActions>
					<Button
						color="secondary"
						variant="contained"
						className={classes.marginRight}
					>
						{words.request}
					</Button>
					<Button onClick={closeModal} variant="outlined">
						{words.close}
					</Button>
				</DialogActions>

				{/*//================================================*/}
			</Dialog>
		</div>
	);
};

//================================================

RewardsModalView.propTypes = {
	// From parent <GroupRewardsSummary /> and
	children: PropTypes.node.isRequired
};

export default RewardsModalView;
