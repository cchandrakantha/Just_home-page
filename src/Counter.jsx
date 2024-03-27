import React, {useState} from 'react'

 function Counter() {
    const [count, setCount] =useState(0);

    const decrement =() =>{
        setCount(count-1);
    }
    const reset = () =>{
        setCount(0)
    }
    const increment = () =>{
        setCount(count+1)
    }



  return (
    <div className='container'>
        <p className='count_display'>{count}</p>
      <button className="count-button" onClick={decrement}>Decrement</button>
      <button className="count-button" onClick={reset}>Reset</button>
      <button className="count-button" onClick={increment}>Increment</button>
    </div>
  )
}
export default Counter;