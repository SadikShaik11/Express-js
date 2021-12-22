const http= require('http');

const express =require('express');

const body_parser=require('body-parser');

const admin= require('./routes/admin');

const shop =require('./routes/shop');

const ex= express();

ex.use(body_parser.urlencoded({}));
ex.use(admin);
ex.use('/shop',shop);

ex.use((req,res)=>{
     res.send("<h1 style ='color:red' >Error 404 Page Not Found ...</h1>")
})

// const server = http.createServer(ex)
// server.listen(3000)
ex.listen(3000);