const express = require("express")
const app = express()
const bcrypt = require('bcrypt')


require("dotenv").config()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }))


app.use("/inventory", require("./controllers/inventory"))

app.use("/", require("./controllers/home"))

app.use('/contact', require("./controllers/contact"))

const users = []



app.post("/register", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(), 
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        console.log(users); // Display newly registered in the console
        res.redirect("/login")
        
    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }

   
})


app.get("/login", (req, res) =>{

    res.render("auths/login")
    console.log("To Login")

})

app.get("/register", (req, res) =>{

    res.render("auths/register")
    console.log("To Register")

})


app.get("*", (req, res) =>{

    res.render("error404")

})


app.listen(process.env.PORT)






