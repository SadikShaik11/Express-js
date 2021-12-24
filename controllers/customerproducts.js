
const path = require('path')
const root_dir = require('../util/path')
const file = require('fs');
let quries = file.createWriteStream('quries.txt')


//product Controllers
exports.Addproduct=(request, response, next) => {
    response.sendFile(path.join(root_dir, 'views', 'addproduct.html'))}

exports.Product_added_response= (request, response, next) => {
    console.log(request.body);
    response.redirect('/done')
}


//customer contact 

exports.AddCustomerQuery=(req, res, next) => {
    res.sendFile(path.join(root_dir, 'views', 'contactform.html'))
}

exports.CustomerQuery= (req, res, next) => {
    let qu = req.body;
    let data = JSON.stringify(qu)
    quries.write(data)
 res.redirect('/done')
}