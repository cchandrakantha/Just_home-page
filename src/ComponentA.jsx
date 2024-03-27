import React,{useState,createContext} from 'react'
import ComponentB from './ComponentB';

export const userContext =  createContext();


export default function ComponentA() {

    const [user,setUser] =useState("Kanth")
  return (
    <div className='box'>
      <h2>Component A</h2>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
         <ComponentB />
      </userContext.Provider>
    </div>
  )
}
