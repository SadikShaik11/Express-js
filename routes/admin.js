
const path = require('path')
const express = require('express');

const root_dir = require('../util/path.js')

//just we can import export easily if we route like this 
const router = express.Router();
router.get('/', (request, response, next) => {
    response.sendFile(path.join(root_dir, 'views', 'shop.html'))
})
router.get('/shop.html', (request, response, next) => {
    response.sendFile(path.join(root_dir, 'views', 'shop.html'))
})

router.get('/done', (request, response, next) => {
    response.send('<h1 style ="color:green">The Process is Success</h1>')
})

module.exports = router