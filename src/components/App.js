import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter /*, Route*/ } from 'react-router-dom';

import Theme from './Theme';
import Header from './Header/Header';

const App = () => (
	<BrowserRouter>
		<Theme>
			<Header />
			<Container>
				{/*<Route exact path="/" component={Other} />*/}
				dsfdgr
			</Container>
		</Theme>
	</BrowserRouter>
);

export default App;
