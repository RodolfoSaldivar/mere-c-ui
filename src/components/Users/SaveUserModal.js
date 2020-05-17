import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import useWords from '../../helpers/words';
import SaveUserModalContent from './SaveUserModalContent';

//================================================

const useStyles = makeStyles((theme) => ({
	dialogModal: theme.dialogModal,
	dialogContent: theme.dialogContent,
	modalCloseButton: theme.modalCloseButton,
	marginRight: { marginRight: theme.spacing(5) }
}));

//================================================

const SaveUserModal = (props) => {
	const classes = useStyles();
	const words = useWords();
	const [open, setOpen] = React.useState(true);

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
				{/* Title and close btn */}
				<Grid component={DialogTitle} container alignItems="center" disableTypography>
					<Grid item xs={11}>
						<Typography variant="h5">
							{words.save} {words.user}
						</Typography>
					</Grid>
					<IconButton className={classes.modalCloseButton} onClick={closeModal}>
						<CloseIcon />
					</IconButton>
				</Grid>

				{/* Content */}
				<DialogContent dividers className={classes.dialogContent}>
					<SaveUserModalContent />
				</DialogContent>

				{/* Action buttons */}
				<DialogActions>
					<Button
						color="secondary"
						variant="contained"
						startIcon={<SaveIcon />}
						className={classes.marginRight}
					>
						Save
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

SaveUserModal.propTypes = {
	// From parent <UsersHeader />
	children: PropTypes.node.isRequired
};

export default SaveUserModal;
