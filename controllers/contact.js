const router = require("express").Router()

router.get("/", (req, res)=>{
    res.render("contact")
    console.log("To Contact")
})



module.exports = router