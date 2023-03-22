// 3rd
import { combineReducers } from "redux";
// import amountReducer from "./amountReducer";
// import amountReducer
import reducer from "./amountReducer";

const reducers = combineReducers({ // we can return multiple reducer function into in single reducer function
    amount: reducer 
})

export default reducers

