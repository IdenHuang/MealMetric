import { data } from "react-router-dom"
import { getRecipes } from "../api"
import { useEffect, useState } from "react"

export function Recipes() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function loadRecipes() {
            const data = await getRecipes()
            setRecipes(data)
        }
        //  console.log("getRecipes() returned:", data, "Type:", typeof data)

        loadRecipes()
    }, [])


    return (
        <>
            {recipes.map((recipe) => {
                return (
                    <div>
                        <h2>Name: {recipe.title}</h2>
                        <p>Calories: {recipe.calories}</p>
                        <p>Protein: {recipe.protein}</p>
                        <p>Fats: {recipe.fat}</p>
                        <p>Carbohydrates: {recipe.carbs}</p>
                        <p>Instructions: {recipe.instructions}</p>
                    </div>
                )
            })}
        </>
    )
}