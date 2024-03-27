import React, { useState } from 'react'

 function Mycompo() {
    const [car,setCar] =useState({name: 2024, manufacture: "ford", model:"Mustang"});

    const handlename = (e) =>{
        setCar(c => ({...c, name: e.target.value}));
    }
    const handlemanufacture =(e) =>{
        setCar(c => ({...c, manufacture: e.target.value}));
    }
    const handlemodel = (e) =>{
        setCar(c => ({...c, model: e.target.value}));
    }

  return (
    <div>
      <p>Your car is : {car.name} {car.manufacture} {car.model}</p>
      <input type='number' value={car.name} onChange={handlename}/>
      <input type='text' value={car.manufacture} onChange={handlemanufacture}/>
      <input type='text' value={car.model} onChange={handlemodel} />
    </div>
  )
}
export default Mycompo;