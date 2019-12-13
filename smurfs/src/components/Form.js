import React, { useState } from "react"
import axios from "axios"

const Form = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: 0,
        height: ""
    })
    
    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.message)
        })
        setSmurf({
            name: "",
            age: 0,
            height: ""
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit} className = "container">

            <div>
                <h2>Create your own  Smurf</h2>
            <label htmlFor = "name">Name: </label>
            <input type = "text" name = "name" placeholder = "Enter Name" onChange={handleChanges} value = {smurf.name}/>
            </div>

            <div>
            <label htmlFor = "age">Age: </label>
            <input type = "number" name = "age" placeholder = "0" onChange={handleChanges} value = {smurf.age}/>
            </div>

            <div>
            <label htmlFor = "height">Height: </label>
            <input type = "text" name = "height" placeholder = "Enter Height" onChange={handleChanges} value = {smurf.height}/>
            </div>
            <button type = "submit">Add a Smurf</button>
        </form>
        </>
    )
}

export default Form