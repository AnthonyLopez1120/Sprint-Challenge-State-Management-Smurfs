import React, { useEffect } from "react"
import { connect } from "react-redux"
import Smurf from "./Smurf"
import { grabSmurf } from "../actions"

 function Smurfs(props){

    useEffect(() => {
        props.grabSmurf();
    }, [])

    return(
        <>
        {props.isFetching && <p className = "fetch">Fetching</p>}
        {props.data && <div>
            {props.data.map(smurf => (
                <Smurf key = {smurf.id} name = {smurf.name} age = {smurf.age} height = {smurf.height}/>
            ))}
        </div>}
        </>
    )
}

const mapStateToProps = state =>({
    data: state.data,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(mapStateToProps, {grabSmurf})(Smurfs) 