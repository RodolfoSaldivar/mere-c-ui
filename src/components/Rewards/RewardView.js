import React from 'react';
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useWords from '../../helpers/words';
import RewardViewContent from './RewardViewContent';

//================================================

const useStyles = makeStyles((theme) => ({
	width100: { width: '100%' },
	dialogModal: theme.dialogModal,
	dialogContent: theme.dialogContent,
	modalCloseButton: theme.modalCloseButton,
	marginRight: { marginRight: theme.spacing(5) }
}));

//================================================

const RewardsModalView = (props) => {
	const classes = useStyles();
	const words = useWords();
	const [open, setOpen] = React.useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<div className={classes.width100}>
			<div className={classes.width100} onClick={openModal}>
				{props.children}
			</div>
			<Dialog
				open={open}
				maxWidth="sm"
				onClose={closeModal}
				PaperProps={{ className: classes.dialogModal }}
			>
				{/* Title and close btn */}
				<Grid component={DialogTitle} container alignItems="center" disableTypography>
					<Grid item xs={11}>
						<Typography variant="h5">Reward name</Typography>
					</Grid>
					<IconButton className={classes.modalCloseButton} onClick={closeModal}>
						<CloseIcon />
					</IconButton>
				</Grid>

				{/* Content */}
				<DialogContent dividers className={classes.dialogContent}>
					<RewardViewContent />
				</DialogContent>

				{/* Action buttons */}
				<DialogActions>
					<Button
						color="secondary"
						variant="contained"
						className={classes.marginRight}
						startIcon={<AddShoppingCartIcon />}
					>
						{words.request}!
					</Button>
					<Button onClick={closeModal} variant="outlined" startIcon={<CloseIcon />}>
						{words.close}
					</Button>
				</DialogActions>
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
