import { createStore } from "redux";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  // second argument is for redux devtool extansion 
export default store
