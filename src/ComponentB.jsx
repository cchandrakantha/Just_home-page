import React,{useContext} from 'react'
import ComponentC from './ComponentC';
import { userContext } from './ComponentA';

export default function ComponentB() {

    const user = useContext(userContext);
  return (
    <div className='box'>
      <h2>Component B</h2>
      <h2>{`Welcome ${user}`}</h2>
      <ComponentC />
    </div>
  )
}
