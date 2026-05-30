import React from 'react'
import { useState } from 'react'

const US4 = () => {
    var[count,setCount]=useState("tomato")
        var[count1,setCount1]=useState("yellow")

     var hc1=()=>{
        if(count=="tomato" && count1=="yellow"){
            setCount("cyan")
            setCount1("blue")
        }
        else{
            setCount("tomato")
            setCount1("yellow")
        }
    }
  return (
    <div>
      <button onClick={hc1}>change</button>
        

    <h1 style={{backgroundColor:count,color:count1}}>hii</h1>
    </div>
  )
}

export default US4
