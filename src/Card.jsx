import React from 'react'
import prabass from './prabass.png';

 function Card() {
  return (
    <div className='card'>
      <img className='card-image' src={prabass} alt='prabass'/>
      <h1 className='card-title'>Praboss</h1>
      <p className='card-text'>Pan World Hero, Who introduced the pan India film making.</p>
    </div>
  )
}
export default Card;