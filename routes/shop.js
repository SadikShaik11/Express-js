const express = require('express');
const router = express.Router();

router.get('/product-body', (request, response, next) => {
    response.send(`<form action="/shop/product-body" method="POST"> 
    <input type="text" name="product_name"> 
    <input type="text" name="size" >
    <button type="submit">ADD</button>
    </form>`);
})
router.post('/product-body', (request, response, next) => {
    console.log(request.body);
    response.redirect('/done')
})

module.exports = router ;