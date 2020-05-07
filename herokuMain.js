const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || '5000';
app.set('port', port);

app.listen(port, () => console.log(`PORT: ${port}`));
