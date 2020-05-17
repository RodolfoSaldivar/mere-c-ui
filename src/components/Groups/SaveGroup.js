import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
// import SaveGroupContent from './SaveGroupContent';
import * as commonActions from '../../actions/commonActions';

//================================================

const useStyles = makeStyles((theme) => ({
	width100: { width: '100%' },
	dialogModal: theme.dialogModal,
	dialogContent: theme.dialogContent,
	modalCloseButton: theme.modalCloseButton,
	marginRight: { marginRight: theme.spacing(5) }
}));

//================================================

const SaveGroup = (props) => {
	const classes = useStyles();
	const words = useWords();
	const [open, setOpen] = React.useState(false);
	const {
		hideFirstModal,
		firstOpenedModal,
		setHideFirstModal,
		setFirstOpenedModal
	} = props;

	//----> When a second modal has been opened
	const hideBackdrop = firstOpenedModal === 'group' && hideFirstModal;

	//----> Handle modal
	const openModal = () => {
		setOpen(true);
		// If no modal has been opened before
		if (!firstOpenedModal) setFirstOpenedModal('group');
		else setHideFirstModal(true);
	};
	const closeModal = () => {
		setOpen(false);
		// Resets to empty string
		if (firstOpenedModal === 'group') setFirstOpenedModal();
		else setHideFirstModal(false);
	};

	//----> Component
	return (
		<div className={classes.width100}>
			<div className={classes.width100} onClick={openModal}>{props.children}</div>
			<Dialog
				open={open}
				maxWidth="sm"
				onClose={closeModal}
				transitionDuration={0}
				hideBackdrop={hideBackdrop}
				PaperProps={{ className: classes.dialogModal }}
			>
				{/* Title and close btn */}
				<Grid component={DialogTitle} container alignItems="center" disableTypography>
					<Grid item xs={11}>
						<Typography variant="h5">
							{words.save} {words.group}
						</Typography>
					</Grid>
					<IconButton className={classes.modalCloseButton} onClick={closeModal}>
						<CloseIcon />
					</IconButton>
				</Grid>

				{/* Content */}
				<DialogContent dividers className={classes.dialogContent}>
					Modal content
				</DialogContent>

				{/* Action buttons */}
				<DialogActions>
					<Button
						color="secondary"
						variant="contained"
						startIcon={<SaveIcon />}
						className={classes.marginRight}
					>
						{words.save}
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

SaveGroup.propTypes = {
	// From parents
	// <SaveUserContent />
	children: PropTypes.node.isRequired,
	// From commonReducer
	hideFirstModal: PropTypes.bool.isRequired,
	firstOpenedModal: PropTypes.string.isRequired,
	// From commonActions
	setHideFirstModal: PropTypes.func.isRequired,
	setFirstOpenedModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ commonReducer }) => commonReducer;

export default connect(mapStateToProps, commonActions)(SaveGroup);
