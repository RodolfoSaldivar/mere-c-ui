import React from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Body from './Body';
import Theme from './Theme';
import Home from './Home/Home';
import Header from './Header/Header';
import { PATHS } from '../helpers/constants';

//================================================

const App = () => (
	<BrowserRouter>
		<Theme>
			<Header />
			<Body>
				<Route exact path={PATHS.home} component={Home} />
			</Body>
		</Theme>
	</BrowserRouter>
);

//================================================

export default App;
