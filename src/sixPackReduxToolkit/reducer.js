import { createReducer } from "@reduxjs/toolkit";

// export const firstReducer = createReducer({}, {}); // first object takes state and  second takes cases

export const firstReducer = createReducer({
    count: 0
}, {
    increment: (state, action) => {
        state.count += action.payload
    },
    decrement: (state, action) => {
        state.count -= action.payload
    }
});

export const secondReducer  = createReducer({
    coins: []
},{
    pushCase: (state, action) => {
        state.coins.push(action.payload) 
    }
})