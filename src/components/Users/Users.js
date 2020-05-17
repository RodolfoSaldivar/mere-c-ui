import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/EditOutlined';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';

import UsersHeader from './UsersHeader';
import useWords from '../../helpers/words';
import MaterialTable from '../Common/MaterialTable';

//================================================

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(0, 2)
	}
}));

//================================================

const Users = () => {
	const classes = useStyles();
	const words = useWords();

	//----> Component
	return (
		<Paper className={classes.paper} elevation={3}>
			<UsersHeader hidden={{ smUp: true }} />

			<MaterialTable
				title={<UsersHeader hidden={{ xsDown: true }} />}
				columnImageKey={0}
				actions={[
					{
						tooltip: words.view,
						icon: () => <VisibilityIcon fontSize="small" />,
						onClick: (event, rowData) => {
							console.log('rowData: ', rowData);
						}
					},
					{
						tooltip: words.edit,
						icon: () => <EditIcon fontSize="small" />,
						onClick: (event, rowData) => {
							console.log('rowData: ', rowData);
						}
					},
					{
						tooltip: words.permissions,
						icon: () => <FormatListBulleted fontSize="small" />,
						onClick: (event, rowData) => {
							console.log('rowData: ', rowData);
						}
					}
				]}
				columns={[
					{ field: 'image', title: '' },
					{ field: 'name', title: words.name },
					{ field: 'lastname', title: words.lastname },
					{ field: 'groups', title: words.groups },
					{ field: 'mail', title: words.mail }
				]}
				data={[
					{
						id: 13,
						image: '',
						name: 'Rodolfo',
						lastname: 'Saldivar',
						groups: 'Group 1',
						mail: 'algo@algo.com'
					},
					{
						id: 69,
						image: '',
						name: 'David',
						lastname: 'Colin',
						groups: 'Group 1, Group 2, Group 3, Group 4',
						mail: 'algo@algo.com'
					}
				]}
			/>
		</Paper>
	);
};

//================================================

export default Users;
