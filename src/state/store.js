import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; // which is helpful for  asynchronus fun()  ko excute karne me 
import reducers from "./reducers";


export const store = createStore(reducers, {}, applyMiddleware(thunk)) // 1st arguments is which is take a all reducers , 2nd is intial stage , 3rd is middle ware function