const express = require("express")
const app = express()
require("dotenv").config()


app.use("/inventory", require("./controllers/inventory"))


app.get("/", (req, res) =>{
    res.send("Hello world")
})



app.get("*", (req, res) =>{

    res.status(404).send("Wrong page 404 Error")

})


app.listen(process.env.PORT)