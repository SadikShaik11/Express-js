const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path')
const root_dir = require('../util/path')
const file = require('fs');
const { redirect } = require('express/lib/response');
let quries = file.createWriteStream('quries.txt')
router.get('/product-body', (request, response, next) => {
    response.sendFile(path.join(root_dir, 'views', 'addproduct.html'))
})

router.post('/product-body', (request, response, next) => {
    console.log(request.body);
    response.redirect('/done')
})

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(root_dir, 'views', 'contactform.html'))
})
router.post('/contact', (req, res, next) => {
    let qu = req.body;
    let data = JSON.stringify(qu)
    quries.write(data)
 res.redirect('/done')
})
module.exports = router;