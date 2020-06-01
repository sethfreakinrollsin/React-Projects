import { CHANGE_SEARCH_FIELD , 
         REQUEST_ROBOTS_PENDING ,  
         REQUEST_ROBOTS_SUCCESS, 
         REQUEST_ROBOTS_FAILED 
} from './constants.js';

//Redux
export const setSearchField=(text)=>{
    return{
    //Constant are Capatalized
    type:CHANGE_SEARCH_FIELD,
    //Sending Data to Reducer
    payload:text
    }
}

//Fetching Data from JSON File
export const requestRobots=()=>(dispatch)=>{
    dispatch({type : REQUEST_ROBOTS_PENDING})
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    //For Data
    .then(data=>dispatch({type: REQUEST_ROBOTS_SUCCESS , payload: data}))
    //For Errors
    .catch(error=> dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
}
