const express = require('express');
const path =require('path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('in the home middleware!!!');
    // whe we have only / then it will consider machin root as the base path
 //   res.sendFile('/views/shop.html');

 // we have path for this 
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
  
});

module.exports = router;

