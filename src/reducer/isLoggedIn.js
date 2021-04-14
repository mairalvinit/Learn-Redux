import * as method from "../actionTypes"; 

 const isLoggedReducer = (state = false,action)=>{
    switch(action.type){
        case method.LOG_IN :{
            return state =  true;
        }

        case method.LOG_OUT : {
            return state = false
        }
        default:
            return state;
    }
}

export default isLoggedReducer;
