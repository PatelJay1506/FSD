import React from 'react'
import { useState } from 'react'
const US1 = () => {
    var[count,setCount]=useState(0)
    var hc=()=>{
        if(count<10){
        setCount(count+1)
    }
    
    }
    var hc2=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
  return (
    <div>
    <button onClick={hc}>inc</button>
        <button onClick={hc2}>dic</button>

    <h1>user click {count}</h1>

    </div>
  )
}

export default US1
