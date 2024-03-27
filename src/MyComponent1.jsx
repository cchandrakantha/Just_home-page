import React, { useState } from 'react'

 function MyComponent1() {

    const [foods, setFoods] = useState("Apple","Orange","Banana");

    const handleadd = () =>{
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value ="";
        setFoods(f =>[...f, newFood]);
    }
    const handledelted = (index) =>{
        setFoods(foods.filter((_,i) => i !== index));
    } 
  return (
    <div>
      <h2>List Of Foods</h2>
      <ul>
        {foods.map((food,index) => 
        <li key={index} onClick={handledelted(index)}>{food}</li>)}
      </ul>
      <input type='text' id='foodinput' placeholder='Enter the food'/>
      <button onClick={handleadd}>Add Food</button>
    </div>
  )
}
export default MyComponent1;