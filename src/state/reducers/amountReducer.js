// 2nd
const reducer = (state=0, action) => {
    if(action.type === 'deposit'){
        return state + action.payload
    }else if(action.type === 'withdraw'){
        return state - action.payload
    }else{
        return state;
    }
}


//  kis tarah state alter kar sakte hai  which needs reducer and state ko aaltar karane ke liye we are needs action creator
export default reducer