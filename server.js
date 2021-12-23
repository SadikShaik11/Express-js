const http = require('http');
const path = require('path')
const express = require('express');
const root_dir = require('./util/path')
const body_parser = require('body-parser');

const admin = require('./routes/admin');

const shop = require('./routes/shop');
const exp = require('constants');

const ex = express();
ex.use(express.static(path.join(__dirname, 'images')))
ex.use(express.static(path.join(__dirname, 'public')));
ex.use(body_parser.urlencoded({}));
ex.use(admin);
ex.use('/shop', shop);

ex.use((req, res) => {
     res.status(404);
     res.sendFile(path.join(__dirname, 'views', '404page.html'));
})

// const server = http.createServer(ex)
// server.listen(3000)
ex.listen(3000);