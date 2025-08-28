const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let recipeRoutes = express.Router()

// Gets all recipe in db
recipeRoutes.route("/recipes").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("recipe").find({}).toArray()

    if (data.length > 0) {
        response.json(data)
    } else {
        throw new Error("data not found")
    }
})

// Gets recipe in db
recipeRoutes.route("/recipes/:id").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("recipe").findOne({_id: new ObjectId(request.params.id)})
    
    if (Object.keys(data).length > 0) {
        response.json(data)
    } else {
        throw new Error("data not found")
    }
})

// Adds recipe in db
recipeRoutes.route("/recipes").post(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        title: request.body.title,
        calories: request.body.calories,
        protein: request.body.protein,
        fat: request.body.fat,
        carbs: request.body.carbs,
        instructions: request.body.instructions
    }
    let data = await db.collection("recipe").insertOne(mongoObject)
    response.json(data)
})

// Updates recipes in db
recipeRoutes.route("/recipes/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            title: request.body.title,
            calories: request.body.calories,
            protein: request.body.protein,
            fat: request.body.fat,
            carbs: request.body.carbs,
            instructions: request.body.instructions
        }
    }
    let data = await db.collection("recipe").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)
})

// Deletes recipe in db
recipeRoutes.route("/recipes/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("recipe").deleteOne({_id: new ObjectId(request.params.id)})
    reponse.json(data)
})

module.exports = recipeRoutes