require('dotenv').config();
require('./server/db-conn');
const User = require('./server/models/User');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// gives server access to static files generated by running yarn build in client
app.use(express.static('./client/build/'));

app.use('/api/auth/', require('./server/routes/auth-route'));
app.use('/api/thoughts/', require('./server/routes/thoughts-route'));
app.use('/api/vars/', require('./server/routes/vars-route'));

// asterisk allow client side routing with react-router
app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/client/build/'});
})

const {PORT} = process.env;
app.listen(PORT, () => console.log(`Wizardry happening on port ${PORT}`));