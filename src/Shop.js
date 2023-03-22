

// without bindActionCreators
// import React from 'react'
// import { useDispatch } from 'react-redux'
// // import { bindActionCreators } from 'redux'
// import { actionCreators } from './state/index'

// const Shop = () => {
//   const dispatch = useDispatch();
//   return (
//     <div>
//     <h2>deposite/withdraw money</h2>
//       <button className='btn btn-primary mx-2' onClick={()=>{ dispatch(actionCreators.withdrawMoney(100))}}>-</button>
//       Update Balance
//       <button className='btn btn-primary mx-2' onClick={()=>{ dispatch(actionCreators.depositMoney(100))}}>+</button>
//     </div>
//   )
// }

// export default Shop



// with bindActionCreators

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
//   const actions = bindActionCreators(actionCreators, dispatch)
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)  // destructuring


  return (
    <div>
    <h2>deposite/withdraw money</h2>
      <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}} >-</button>
      Update Balance {balance}
      <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
