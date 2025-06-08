const express = require('express');

const app = express();

app.get('/favicon.ico', (req, res) =>  res.status(204).end())



app.get('/add-products',(req,res,next)=>{
    console.log('in the add-products middleware!!!');
    return res.send('<h1>The "Add Products" Page</h1>');

})

app.get('/',(req,res,next)=>{
    console.log('in the home middleware!!!');
    res.send('<h1>Welcome to the Home Page</h1>');
  
})



app.listen(3000)