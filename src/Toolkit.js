import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Toolkit = () => {
    const dispatch = useDispatch()
    const countState = useSelector(state => state.first.count)
    const coinState = useSelector(state => state.second.coins)
  return (
    <div>
    <h1>{countState}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>INC</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>DEC</button>

      <br /><br /><br /><br />
      {coinState.map((curElem, index) => {
        return <div key={index}>{curElem}</div>
      })}
      <button onClick={() => dispatch({ type: "pushCase", payload: "newAdded" })}>AddSomeThing</button>
    </div>
  )
}

export default Toolkit
