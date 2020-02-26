const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('getData', {string: "Hello CS400 World!"});
});

router.post('/', (req,res,next) => {
    let returnObj = req.body.string;
    const post = {str: returnObj, len: returnObj.length};
    res.render('getData', post);
});

module.exports = router;
