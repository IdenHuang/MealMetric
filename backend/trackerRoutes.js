const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let trackerRoutes = express.Router()

// Gets all recorded macro data from db
trackerRoutes.route("/calender").get(async (request, repsonse) => {
    let db = database.getDb()
    let data = await db.collection("calender").find({}).toArray()

    if (data.length > 0) {
        repsonse.json(data)
    } else {
        throw new Error("data not found")
    }
})

// Gets a single dates macro
trackerRoutes.route("/calender/:id").get(async (request, reponse) => {
    let db = database.getDb()
    let data = await db.collection("calender").findOne({_id: new ObjectId(request.params.id)})

    if (Object.keys(data).length > 0) {
        reponse.json(data)
    } else {
        throw new Error("data not found")
    }
})

// Update macro in db
trackerRoutes.route("/calender/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            date: request.body.date,
            calories: request.body.calories,
            protein: request.body.protein,
            fat: request.body.fat,
            carbs: request.body.carbs
        }
    }
    let data = await db.collection("calender").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)
})

// Deletes calender date in db
trackerRoutes.route("/calender/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("calender").deleteOne({_id: new ObjectId(request.params.id)})
    reponse.json(data)
})

module.exports = trackerRoutes