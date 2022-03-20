const express = require("express")

const app = express()

const usercontroller = require("./controllers/user.controller")

const gallerycontroller = require("./controllers/gallery.controller")

app.use(express.json())

app.use("/users",usercontroller)

app.use("/gallery",gallerycontroller)

module.exports = app