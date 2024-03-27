import React, { useState } from 'react'

 function ColorPicker() {


    const [color,setColor] = useState("");

    const handleColor = (e) =>{
        setColor(e.target.value);
    }
  return (
    <div>
      <h1>Color picker</h1>
      <div className='color-display' style={{background:color}}>
        <p>Selected: {color}</p>
      </div>
      <label>Select a color :</label>
      <input type='color' value={color} onChange={handleColor}/>
    </div>
  )
}
export default ColorPicker;