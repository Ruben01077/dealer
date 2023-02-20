const router = require("express").Router()

router.get("/", (req, res)=>{
    res.render("home")
    console.log("To Home")
})



module.exports = router