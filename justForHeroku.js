const path = require('path');
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	});
}

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Listening to PORT: ${port}`));
