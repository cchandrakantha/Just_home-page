import React from 'react'
import prabass from './prabass.png';

 function Practise() {
    const handleClick = (e) => e.target.style.display = "none";
    
  return (
    <div className='card' onClick={(e) => handleClick(e)}>
      <img className='card-image' src={prabass} alt='prabass'/>
      <h1 className='card-title'>Praboss</h1>
      <p className='card-text'>Pan World Hero, Who introduced the pan India film making.</p>
      <button onClick={(e) => handleClick(e)}>Hide Card</button>
    </div>
  )
}
export default Practise;