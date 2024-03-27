import React,{useContext} from 'react'
import { userContext } from './ComponentA';


export default function ComponentD() {

    const user = useContext(userContext);
  return (
    <div className='box'>
      <h2>Component D</h2>
      <h2>{`bye ${user}`}</h2>
    </div>
  )
}
