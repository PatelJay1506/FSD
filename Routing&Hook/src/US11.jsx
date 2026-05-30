import { useState } from 'react'
import React from 'react'

const US11 = () => {
    const [task,settast]=usteState("")
    const [todo,settodo]=usteState([])
    const hf =()=>{
       settodo([...todo,{name:task}])
       settask("")
       

    }
    
   
  return (
    <div>
      <input type="text" name="fname" onChange={(e)=> settask(e.target.value)}/>
      <button onClick={hf}>add</button>
      {
        todo.map((i)=>(
            <div>
                <h2>{i.name}</h2>
                
            </div>
        ))
      }
    </div>
  )
}

export default US11
