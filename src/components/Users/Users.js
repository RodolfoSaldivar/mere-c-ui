import React from 'react';
import MaterialTable from 'material-table';
import Zoom from 'react-medium-image-zoom';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import UsersHeader from './UsersHeader';
import { useIsMobile, ZOOM_BG_COLOR } from '../../helpers/constants';

//================================================

const deadpool = 'https://media.heartlandtv.com/images/Pool1.PNG';

const useStyles = makeStyles((theme) => ({
	title: {
		marginRight: theme.spacing(3)
	},
	avatar: {
		width: 35,
		height: 35
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(2, 2, 2, 0)
	},
	paper: {
		padding: theme.spacing(0, 2),
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
		},
		// Headers of the table
		'& th': {
			fontWeight: 'bold'
		},
		// Rows except the pagination row
		'& tr:hover:not(.MuiTableRow-footer)': {
			backgroundColor: 'rgba(0, 0, 0, 0.05)'
		}
	}
}));

//================================================

const Users = () => {
	const classes = useStyles();
	const isMobile = useIsMobile();

	//----> Displays the avatar on the table
	const renderAvatar = (rowData) => (
		<Box display="flex" justifyContent="center">
			<Zoom zoomMargin={isMobile ? 10 : 100} overlayBgColorEnd={ZOOM_BG_COLOR}>
				<Avatar className={classes.avatar} src={rowData.image || deadpool} />
			</Zoom>
		</Box>
	);

	//----> Component
	return (
		<Paper className={classes.paper} elevation={3}>
			<UsersHeader hidden={{ smUp: true }} />

			<MaterialTable
				title={<UsersHeader hidden={{ xsDown: true }} />}
				options={{
					search: true,
					padding: 'dense',
					pageSize: 10
				}}
				components={{
					Container: Box
				}}
				actions={[
					{
						icon: 'save',
						tooltip: 'Save User',
						onClick: (/*event, rowData*/) => {
							// Do save operation
						}
					}
				]}
				columns={[
					{ field: 'image', title: '', render: renderAvatar },
					{ field: 'name', title: 'Name' },
					{ field: 'lastname', title: 'Lastname' },
					{ field: 'group', title: 'Group' },
					{ field: 'mail', title: 'Mail' },
					{ field: 'status', title: 'Status' }
				]}
				data={[
					{
						image: '',
						name: 'Rodolfo',
						lastname: 'Saldivar',
						group: 'Group 1',
						mail: 'algo@algo.com',
						status: 'loco'
					},
					{
						image: '',
						name: 'David',
						lastname: 'Colin',
						group: 'Group 1, Group 2, Group 3, Group 4',
						mail: 'algo@algo.com',
						status: 'bello'
					}
				]}
				localization={{
					body: {
						emptyDataSourceMessage: 'No records to display'
					},
					header: {
						actions: ''
					},
					toolbar: {
						searchTooltip: 'Search',
						searchPlaceholder: 'Search'
					},
					pagination: {
						labelDisplayedRows: '{from}-{to} of {count}',
						labelRowsSelect: 'rows',
						labelRowsPerPage: 'Rows per page:',
						firstAriaLabel: 'First Page',
						firstTooltip: 'First Page',
						previousAriaLabel: 'Previous Page',
						previousTooltip: 'Previous Page',
						nextAriaLabel: 'Next Page',
						nextTooltip: 'Next Page',
						lastAriaLabel: 'Last Page',
						lastTooltip: 'Last Page'
					}
				}}
			/>
		</Paper>
	);
};

export default Users;
