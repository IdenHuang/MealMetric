const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const recipes = require("./recipeRoutes")
const calender = require("./trackerRoutes")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(recipes)
app.use(calender)

app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`)
})