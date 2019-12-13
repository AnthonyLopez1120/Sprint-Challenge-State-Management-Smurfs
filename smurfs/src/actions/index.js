import axios from "axios"

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"

export const grabSmurf = () => dispatch =>{ 
    dispatch({ type: FETCH_SMURF_START})
    axios.get(`http://localhost:3333/smurfs`)
    .then(res=>{
        console.log("Successful Pull", res.data)
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log(err.message)
        dispatch({type: FETCH_SMURF_FAILURE, payload: err.message})
    })
}

export const addSmurf = (smurf) => dispatch =>{ 
    dispatch({ type: ADD_SMURF_START})
    axios.post(`http://localhost:3333/smurfs`, smurf)
    .then(res=>{
        console.log("Successful add", res.data)
        dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err=>{
        console.log(err.message)
        dispatch({type: ADD_SMURF_FAILURE, payload: err.message})
    })
}

export const ADD_SMURF_START =   "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"
