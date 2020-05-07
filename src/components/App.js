import React from 'react';
import { BrowserRouter /*, Route*/ } from 'react-router-dom';

import Body from './Body';
import Theme from './Theme';
import Header from './Header/Header';

const App = () => (
	<BrowserRouter>
		<Theme>
			<Header />
			<Body>
				App.js
				{/*<Route exact path="/" component={Other} />*/}
			</Body>
		</Theme>
	</BrowserRouter>
);

export default App;
