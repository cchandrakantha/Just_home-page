import React,{useState,useRef,useEffect} from 'react'

 function MyCompos() {
    const inputRef = useRef(null);

 useEffect = (() =>{
    console.log("Rendered")
},[]);

function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor ="yellow";
}
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <input ref={inputRef}/>
    </div>
  )
}
export default MyCompos;