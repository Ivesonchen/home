var router = require('express').Router();

router.get('/',(req,res) => {
    res.sendFile( "/views/blog.html");
})

module.exports = router;
