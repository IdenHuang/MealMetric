import { data } from "react-router-dom"
import { getRecipes, createRecipe } from "../api"
import { useEffect, useState } from "react"

export function Recipes() {

    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fats, setFats] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [instructions, setInstructions] = useState("")
    


    useEffect(() => {
        async function loadRecipes() {
            const data = await getRecipes()
            setRecipes(data)
        }
        //  console.log("getRecipes() returned:", data, "Type:", typeof data)

        loadRecipes()
    }, [])

    async function handleSubmit() {
        let newObject = {
            title: name,
            calories: calories,
            protein: protein,
            fat: fats,
            carbs: carbs,
            instructions: instructions
        }

        const result = await createRecipe(newObject)
        console.log(result)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={(e) => setName(e.target.value)} required name="recipeName" ></input>
                <label>Calories: </label>
                <input onChange={(e) => setCalories(e.target.value)} required name="recipeCalories" type="number"></input>
                <label>Protein: </label>
                <input onChange={(e) => setProtein(e.target.value)} required name="recipeProtein" type="number"></input>
                <label>Fats: </label>
                <input onChange={(e) => setFats(e.target.value)} required name="recipeFats" type="number"></input>
                <label>Carbohydrates: </label>
                <input onChange={(e) => setCarbs(e.target.value)} required name="recipeCarbs" type="number"></input>
                <label>Instructions: </label>
                <textarea onChange={(e) => setInstructions(e.target.value)} required name="recipeInstructions"></textarea>
                <button type="submit">Upload Recipe</button>
            </form>
            {recipes.map((recipe) => {
                return (
                    <>
                        <h2>Name: {recipe.title}</h2>
                        <p>Calories: {recipe.calories}</p>
                        <p>Protein: {recipe.protein}</p>
                        <p>Fats: {recipe.fat}</p>
                        <p>Carbohydrates: {recipe.carbs}</p>
                        <p>Instructions: {recipe.instructions}</p>
                    </>
                )
            })}
        </>
    )
}