import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from "../actions"

const initialState = [{
    date: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
    isFetching: false,
    error: ""
}]


const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_SMURF_START:
            const startState = {
                ...state,          
                isFetching: true,
                error: ""
            }
            return startState
            
        case FETCH_SMURF_SUCCESS:
            const successState = {
                data: action.payload,
                isFetching: false,
                error: ""
            }
            return successState

        case FETCH_SMURF_FAILURE:
            const failState = {
                ...state,
                data: "",
                isFetching: false,
                error: action.payload
            }
            return failState

        default:
            return state
            
    }
}

export default reducer