const router = require('express').Router()

router.get('/', (req, res)=>{

    res.send("hello from inventory")

})


module.exports = router
