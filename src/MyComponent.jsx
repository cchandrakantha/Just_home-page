import React,{useState} from 'react'

 function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, SetQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handlerName = (e) =>{
      setName(e.target.value);
    } 

    const handlerQuantity = (e) =>{
      SetQuantity(e.target.value);
    }

    const handleComment = (e) =>{
      setComment(e.target.value);
    }
    const handlePayment = (e) =>{
      setPayment(e.target.value);
    }
    const handleShipping =(e) =>{
      setShipping(e.target.value);
    }
  return (
    <div>
     <input value={name} onChange={handlerName}/>
     <p>Name: {name}</p>

     <input value={quantity} onChange={handlerQuantity} type="number"/>
     <p>Quantity : {quantity}</p>

     <textarea value={comment} onChange={handleComment} placeholder='Enter the instructions'/>

     <p>Comment : {comment}</p>
     <select value={payment} onChange={handlePayment}>
      <option value="select option"> Select Option</option>
      <option value="Phone pay"> Phone pay</option>
      <option value="Google pay">Google pay</option>
      <option value="Patym"> Patym</option>
     </select>
     <p>Payment : {payment}</p>
     <label>
      <input type='radio' value="Pick up" checked={shipping === "Pick up"} onChange={handleShipping}/> Pick Up 
     </label><br/>
     <label>
      <input type='radio' value="Delivery " checked={shipping === "Delivery "} onChange={handleShipping}/> Delivery 
     </label>
     <p>Shipping : {shipping}</p>
    </div>
  )
}
export default MyComponent;