const express = require('express'),
    app=express();
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/static'));
app.use((req,res,next)=>{

    var now=new Date().toString();
    var  log = `${now}: ${req.method} ${req.url}`;

     console.log();
     fs.appendFile('server.log',log +'\n');
    next();
})
app.get('/',(req,res)=> {
    res.render('home.hbs',
    {
        pageTitle:"Welcome to Home Page"

    });
});


app.get('/about',(req,res)=>
{
    res.render('about.hbs',
    {
        pageTitle:"Welcome to About Page"

    });
});
app.get('/bad',(req,res)=>
{
    res.send({
    ErrorMessage:"This page Contains errors"
});
});
app.listen(port,()=>{
    console.log(`started server on port : ${port}`);
});