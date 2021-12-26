const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const products = require('../controllers/customerproducts')

const { redirect } = require('express/lib/response');


//Add a product
router.get('/product-body', products.Addproduct)

//Product Response
router.post('/product-body', products.Product_added_response)

//Add a customer Query
router.get('/contact?', products.AddCustomerQuery)

//Storing Query
router.post('/contact', products.CustomerQuery)

module.exports = router;