
const intialState = 10;

export const muldivReducer = (state = intialState, action) => {
    // console.log(action)
    switch(action.type){
        case 'MUL':
            return state * action.payload
        case 'DIV':
            return state / action.payload
        default:
            return state
    }
}


export const changTheNumber = (state = intialState, action) => {
    switch(action.type){
        case "INCREMENT" : return state + action.payload
        case "DECREMENT" : return state - 1
        default : return state
    }
}
