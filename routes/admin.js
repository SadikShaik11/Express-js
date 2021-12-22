const express = require('express');

//just we can import export easily if we route like this 
const router = express.Router();

router.get( '/', (request, response ,next)=>{
    response.send(`<h1 style ="color:Yellow ; background-color:green">
    Welcome</h1>`)
   
})

router.get( '/done', (request, response ,next)=>{
    response.send('<h1 style ="color:green">The Process is Success</h1>')
})

module.exports=router