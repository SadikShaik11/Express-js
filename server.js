const http= require('http');

const express =require('express');

const body_parser=require('body-parser')

const ex= express()

/*we can use body parser to manage all that chunk buffer thing
 we did in node js*/
 ex.use(body_parser.urlencoded({}))
//if the url doesnt match this fuction never gonna called
ex.use( '/product-body',(request, response ,next)=>{
    response.send(`<form action="/product" method="POST"> 
    <input type="text" name="product_name"> 
    <input type="text" name="size" >
    <button type="submit">ADD</button>
    </form>`);
})
ex.use( '/product', (request, response ,next)=>{
    console.log(request.body);
   response.redirect('/done')
})
ex.use( '/done', (request, response ,next)=>{
      response.send('<h1>The Process is done</h1>')
})

ex.use('/',(request,response,next)=>{ 
    response.send('<h1>Welcome !!!<h1>')
 
})
const server = http.createServer(ex)
server.listen(3000)