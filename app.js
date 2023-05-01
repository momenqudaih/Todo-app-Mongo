const express = require('express');
const { router } = require('./router/router.js');
const compression = require('compression');
require('dotenv').config();
const { connection } = require('./config/connection');

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port || 3000);

connection();

app.disable('x-powered-by');
app.use(express.json(), express.urlencoded({ extended: false }), compression());

app.use(express.static('public'));
app.use(router);

module.exports = app;
