const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('in the home middleware!!!');
    res.send('<h1>Welcome to the Home Page</h1>');
  
});

module.exports = router;

