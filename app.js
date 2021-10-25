const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

// Create an Express application that sets a cookie when routed to
// /login with their name. If a cookie is present with a name key,
// then it says "Welcome {name}! when the user routes to /hello".

app.use(cookieParser())

app.get("/login", (req, res) => {
    res.cookie("username", "dustin")
    res.send("Added username")
})

app.get("/hello", (req, res) => {
    if (req.cookies.username) {
        res.send(`Welcome, ${req.cookies.username}`)
    }
})

app.listen(port, () => { console.log(`Started server on port ${port}`) })