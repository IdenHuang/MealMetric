// import { data }  from "react-router-dom"
import { getInputs, createInput } from "../api"
import { useEffect, useState } from "react"

export function Calendar() {

    const [calender, setCalender] = useState([])
    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fats, setFats] = useState(0)
    const [carbs, setCarbs] = useState(0)

    useEffect(() => {
        async function loadCalender() {
            const data = await getInputs()
            data.sort((d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime())
            setCalender(data)
        }

        loadCalender()
    }, [])

    async function handleSubmit() {
        // e.preventDefault()

        let newObject  = {
            date: new Date(),
            calories: calories.parseInt(),
            protein: protein,
            fat: fats,
            carbs: carbs
        }
        
        const result = await createInput(newObject)
        console.log(result)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Calories: </label>
                <input onChange={(e) => setCalories(e.target.value)} required name="inputCalories" type="number"></input>
                <label>Protein: </label>
                <input onChange={(e) => setProtein(e.target.value)} required name="inputProtein" type="number"></input>
                <label>Fats: </label>
                <input onChange={(e) => setFats(e.target.value)} required name="inputFats" type="number"></input>
                <label>Carbohyrdates: </label>
                <input onChange={(e) => setCarbs(e.target.value)} required name="inputCarbs" type="number"></input>
                <button type="submit">Log into Tracker</button>
            </form>


            {calender.map((input) => {

                const date = new Date(input.date)
                let stringDate = date.toString();

                return (
                    <div>
                        <h2>Date: {stringDate.slice(4, 15)}</h2>
                        <p>Calories: {input.calories}</p>
                        <p>Protein: {input.protein}</p>
                        <p>Fats: {input.fat}</p>
                        <p>Carbs: {input.carbs}</p>
                    </div>
                )
            })}
        </>
    )
}