import React from 'react';
import { setIn } from 'immutable';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table';
import Zoom from 'react-medium-image-zoom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import useWords from '../../helpers/words';
import { useIsMobile, ZOOM_BG_COLOR, STARTED_AS_MOBILE } from '../../helpers/constants';

//================================================

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: 35,
		height: 35
	},
	mainContainer: {
		// Headers of the table
		'& th': {
			fontWeight: 'bold'
		},
		// Rows except the pagination row
		'& tr': {
			'&:hover:not(.MuiTableRow-footer)': {
				backgroundColor: 'rgba(0, 0, 0, 0.05)'
			},
			// Action buttons
			'& button.MuiButtonBase-root:not(.Mui-disabled)': {
				...theme.bgcSecondaryFade,
				marginRight: theme.spacing(1)
			}
		},
		// Search input
		'& div.MuiFormControl-root': {
			padding: theme.spacing(0, 2),
			[theme.breakpoints.down('xs')]: {
				width: '100%'
			}
		},
		// Container of title/button and search input
		'& >div >div.MuiToolbar-root': {
			padding: 0,
			// Space between the title/button and search input
			'& >div:not(.MuiFormControl-root)': {
				[theme.breakpoints.down('xs')]: {
					display: 'none'
				}
			}
		}
	}
}));

//================================================

const InternalMaterialTable = (props) => {
	const classes = useStyles();
	const words = useWords();
	const isMobile = useIsMobile();
	const { columns, columnImageKey } = props;

	//----> JUST modified if there is an image in the columns
	let columnsModified = null;

	//----> When there is an image, append to render it as an avatar
	if (columnImageKey !== undefined) {
		const renderAvatar = (rowData) => (
			<Box display="flex" justifyContent="center">
				<Zoom zoomMargin={isMobile ? 10 : 100} overlayBgColorEnd={ZOOM_BG_COLOR}>
					<Avatar className={classes.avatar} src={rowData.image || ''} />
				</Zoom>
			</Box>
		);
		// Adds the render function to the image object in an immutable way
		columnsModified = setIn(columns, [columnImageKey, 'render'], renderAvatar);
	}

	//----> Component
	return (
		<div className={classes.mainContainer}>
			<MaterialTable
				data={props.data}
				title={props.title}
				actions={props.actions}
				components={{ Container: Box }}
				columns={columnsModified || columns}
				options={{
					search: true,
					padding: 'dense',
					actionsColumnIndex: -1,
					pageSize: STARTED_AS_MOBILE ? 5 : 10
				}}
				localization={{
					header: {
						actions: ''
					},
					toolbar: {
						searchTooltip: words.search || '',
						searchPlaceholder: words.search || ''
					},
					body: {
						emptyDataSourceMessage: words.emptyData || ''
					},
					pagination: {
						nextTooltip: words.nextPage || '',
						lastTooltip: words.lastPage || '',
						labelRowsSelect: words.rows || '',
						firstTooltip: words.firstPage || '',
						lastAriaLabel: words.lastPage || '',
						nextAriaLabel: words.nextPage || '',
						firstAriaLabel: words.firstPage || '',
						previousTooltip: words.previousPage || '',
						labelRowsPerPage: words.rowsPerPage || '',
						previousAriaLabel: words.previousPage || '',
						labelDisplayedRows: `{from}-{to} ${words.of} {count}`
					}
				}}
			/>
		</div>
	);
};

//================================================

InternalMaterialTable.propTypes = {
	// From parents
	// <Users />
	actions: PropTypes.array,
	title: PropTypes.node.isRequired, // React component
	data: PropTypes.array.isRequired,
	columnImageKey: PropTypes.number,
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			field: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired
		})
	)
};

export default InternalMaterialTable;
