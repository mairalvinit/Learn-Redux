import * as method from "./actionTypes";

const increment = ()=>{
    return{
        type : method.INCREMENT
    };
}

const decrement =() =>{
    return {
        type : method.DECREMENT
    };
}

const signIn = () =>{
    return {
        type : method.LOG_IN
    };
}

const signOut = () =>{
    return {
        type : method.LOG_OUT
    };
}

export {increment,decrement,signIn,signOut} ;