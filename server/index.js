const express = require('express')
const app = express()
const port = 3000
const parser = require('body-parser');
const db = require('./db');
const router = require('./routes.js');

// Middleware
app.use(express.static('./client/dist'))
app.use(parser.json());
app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))