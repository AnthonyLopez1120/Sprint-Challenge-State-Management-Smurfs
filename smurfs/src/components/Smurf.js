import React from "react"

const  Smurf = props =>{

    return(
        <div>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

export default Smurf