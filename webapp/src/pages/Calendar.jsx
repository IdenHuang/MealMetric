import { data}  from "react-router-dom"
import { getInputs } from "../api"
import { useEffect, useState } from "react"

export function Calendar() {

    const [calender, setCalender] = useState([])
    useEffect(() => {
        async function loadCalender() {
            const data = await getInputs()
            setCalender(data)
        }

        loadCalender()
    }, [])


    return (
        <>
            {calender.map((input) => {

                const date = new Date(input.date)

                return (
                    <div>
                        <h2>Date: {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
                        <p>Calories: {input.calories}</p>
                        <p>Protein: {input.protein}</p>
                        <p>Carbs: {input.carbs}</p>
                    </div>
                )
            })}
        </>
    )
}