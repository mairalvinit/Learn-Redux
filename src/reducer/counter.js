import * as method from "../actionTypes";
const counterReducer = (state=0,action)=>{
    switch(action.type){
        case method.INCREMENT : {
            return state + 1;
        }
        case method.DECREMENT : {
            return state -1;
        }

        default :{
            return state;
        }
    }
}

export default counterReducer;