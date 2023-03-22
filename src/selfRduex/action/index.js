export const mulNum = (num) => {
    return {
        type: 'MUL',
        payload: num
    }
}

export const divNum = (num) => {
    return {
        type: 'DIV',
        payload: num
    }
}

export const incNumber = (num) => {
    return {
        type : "INCREMENT",
        payload: num
    }
}

export const decNumber = () => {
    return {
        type : "DECREMENT"
    }
}