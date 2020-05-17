import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Carousel from '../Common/Carousel';
import useWords from '../../helpers/words';

//================================================

const items = [
	'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-cat-breed-1553197454.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
	'https://ichef.bbci.co.uk/news/410/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'
];

//================================================

const RewardsModalViewContent = () => {
	const words = useWords();

	return (
		<Grid container justify="center">
			<Grid item xs={12} sm={7}>
				<Carousel items={items} />
			</Grid>
			<Grid item xs={12} sm={9}>
				<Typography paragraph>
					Esta es una descripcion lorem ipsum dolor sit amet, consetetur sadipscing.
				</Typography>
			</Grid>
			<Grid item xs={12} sm={9}>
				<Grid container justify="space-around">
					<Typography>{words.points}: 10</Typography>
					<Typography>{words.stock}: &infin;</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

//================================================

export default RewardsModalViewContent;
