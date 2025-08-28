import axios from "axios"

const URL = "http://localhost:3000"

// Returns all recipes
export async function getRecipes() {
    const response = await axios.get(`${URL}/recipes`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

// Return recipe
export async function getRecipe(id) {
    const response = await axios.get(`${URL}/recipes/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

// Create recipe
export async function createRecipe(recipe) {
    const response = await axios.post(`${URL}/recipes`, recipe)
    return response.data
}

// Update recipe
export async function updateRecipe(id, recipe) {
    const response = await axios.put(`${URL}/recipes/${id}, recipe`)
    return response.data
}

// Delete recipe
export async function deleteRecipe(id) {
    const response = await axios.delete(`${URL}/recipes/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}


// Returns all calender inputs
export async function getInputs() {
    const response = await axios.get(`${URL}/calender`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

// Return calender input
export async function getInput(id) {
    const response = await axios.get(`${URL}/calender/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}

// Create calender input
export async function createInput(input) {
    const response = await axios.post(`${URL}/calender`, input)
    console.log(response.data)
    return response.data
}

// Update calender input
export async function updateInput(id, input) {
    const response = await axios.put(`${URL}/calender/${id}`, input)
    return response.data
}

// Delete calender input
export async function deleteInput(id) {
    const response = await axios.delete(`${URL}/calender/${id}`)

    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}