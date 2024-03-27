import React from 'react'

 function Button() {
  
  const handleClick = (e) => e.target.textContext = "Husshh!!";

  return (
    
     <button onDoubleClick={(e) => handleClick(e)}> Click me </button>
    
  )
}
export default Button;