const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/path');


router.get('/add-products',(req,res,next)=>{
    console.log('in the add-products middleware!!!');
    return res.sendFile(path.join(rootDir,'views','add-products.html'));
});

// here we have same path but different method
router.post('/add-products',(req,res)=>{
    console.log('body:', req.body);
    res.redirect('/');
});
module.exports = router;