import {CHANGE_SEARCH_FIELD, 
        REQUEST_ROBOTS_PENDING ,  
        REQUEST_ROBOTS_SUCCESS, 
         REQUEST_ROBOTS_FAILED 
} from './constants.js';

//Initial State For Searching
const initalStateSearch={
    searchField:'' 
}

//Reducer Function
export const searchRobots=(state=initalStateSearch,action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            //Assigning Objects Method 1
            // return Object.assign({},state, {searchField:action.payload});
            //Assigning Objects Method 2
            return {...state,searchField:action.payload}
        default:
            return state;
    }
}

//Initial State For Robots
const initialStateRobots={
    isPending:false,
    robots:[],
    error:''
};

export const requestRobots=(state=initialStateRobots,action={})=>{
    switch(action.type){
        case  REQUEST_ROBOTS_PENDING:  
            return Object.assign({},state,{isPending:true})
        case REQUEST_ROBOTS_SUCCESS:
            return {...state,robots:action.payload,isPending:false}
        case REQUEST_ROBOTS_FAILED :
            return Object.assign({},state,{error:action.payload,isPending:false})
        default:
            return state
    }
}