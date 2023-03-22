/// sixPack reduxToolkit 
import React from 'react'
import Toolkit from './Toolkit'

const App = () => {
  return (
    <div>
      <Toolkit />
    </div>
  )     
}    

export default App 



// code with harry redux
// import './App.css';
// import Navbar from './Navbar';

// import Shop from './Shop';
// function App() {
//   return (
//     <>
//     <Navbar />
//     <div className="container">
//     <Shop />
//     </div>
//     </>
//   );
// }

// export default App;



// ///////  thapa redux react
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { incNumber, decNumber } from './thapa/actions'

// const App = () => {
//   const myState = useSelector(state => state.changTheNumber)
//   console.log(myState)
//   const dispatch = useDispatch()
//   return (
//     <>
//       <div className='container'>
//       <h1>Increment / Decrement Counter</h1>
//       <h2>Using react and redux</h2>

// <div className="quantity">
//   <button  className="quantity_minus" title='Decrement' onClick={ () => dispatch(decNumber())}> - </button>
//   <input type="text" name='quantity' className='quantity_input'  value={myState} />
// <h1>{myState}</h1>
//   <button  className="quantity_plus" title='Increment' onClick={ () => dispatch(incNumber(5))}> + </button>
// </div>
//       </div>
//     </>
//   )
// }

// export default App


////// 
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { mulNum, divNum } from './selfRduex/action/index.js'

// const App = () => {
//   const dispatch = useDispatch()
//   const myState =  useSelector(state => state.muldivReducer)
//   console.log(myState)
//   return (
//     <div>
//       <h1>{myState}</h1>
//       <button onClick={() => dispatch(mulNum(50))}> * </button>
//       <button onClick={() => dispatch(divNum(5))}> / </button>
//     </div>
//   )
// }
// export default App

