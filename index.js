const express = require("express")
const app = express()
require("dotenv").config()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))


app.use("/inventory", require("./controllers/inventory"))

app.use("/", require("./controllers/home"))

app.use('/contact', require("./controllers/contact"))




app.get("*", (req, res) =>{

    res.render("error404")

})


app.listen(process.env.PORT)






