const express = require('express');
const router = express.Router();

router.get('/add-products',(req,res,next)=>{
    console.log('in the add-products middleware!!!');
    return res.send('<form action="/admin/add-products" method="post"><input type="text" name="message"><button type="submit">submit</button></form>');

});

// here we have same path but different method
router.post('/add-products',(req,res)=>{
    console.log('body:', req.body);
    res.redirect('/');
});
module.exports = router;