import React, { useState } from 'react'

 function MyNewCompo() {
    const [cars,setCars] = useState([]);
    const [carYear,setCarYears] =useState(new Date().getFullYear());
    const [carMake,setCarsMake] = useState();
    const [carModel,setCarsModel] = useState();

    function handleradd (){

        const newCar = {year : carYear, make: carMake, model: carModel};
        setCars(c => [...c , newCar]);

        setCarYears(new Date().getFullYear());
        setCarsMake("");
        setCarsModel("");
    }

    function handlerRemove(index){
        setCars(c => c.filter((_,i) => i !== index));
    }

    function handlerYear(e){
        setCarYears(e.target.value)
    }
    function handlerMake(e){
        setCarsMake(e.target.value)
    }

    function handlerModel(e){
        setCarsModel(e.target.value)
    }




  return (
    <div>
        <h2>List of Cars</h2>
        <ul>
            {cars.map((car,index) =>
                <li key={index} onClick={() => handlerRemove(index)}>
                    {car.year} {car.make} {car.model}
                </li>
            )}
        </ul>
      <input type='number' value={carYear} onChange={handlerYear}/><br/>
      <input type='text' value={carMake} onChange={handlerMake} placeholder='Enter the Make'/><br/>
      <input type='text' value={carModel}  onChange={handlerModel} placeholder='Enter the Model'/><br/>
      <button onClick={handleradd}>Add Car</button>
    </div>
  )
}
export default MyNewCompo;