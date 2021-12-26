
const path = require('path')
const root_dir = require('../util/path')


const Sequealize = require('sequelize');

const sequelize = require('../Datebase/database'); 
const SqlString = require('mysql/lib/protocol/SqlString');
const Query = require('mysql/lib/protocol/sequences/Query');

const Customer = new sequelize.define(
    'user_quiries',{
        name:{
            type:Sequealize.STRING
        },
        email:{
            typeof:Sequealize.STRING,
            allowNull:false,
            primaryKey:true
        },
        Query:Sequealize.STRING
        });


//product Controllers
exports.Addproduct=(request, response, next) => {
    response.sendFile(path.join(root_dir, 'views', 'addproduct.html'))}

exports.Product_added_response= (request, response, next) => {
    
    response.redirect('/done')
}


//customer contact 

exports.AddCustomerQuery=(req, res, next) => {
    res.sendFile(path.join(root_dir, 'views', 'contactform.html')
   )
}

exports.CustomerQuery= (req, res, next) => {

    const name = req.body.name[0];
    const mail =req.body.name[1];
    const query =req.body.query 

    Customer.create({
        name:name,
        email:mail,
        Query:query
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
 res.redirect('/done')
}

module.exports=Customer;