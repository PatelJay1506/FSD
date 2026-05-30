import React from 'react'
import { useState } from 'react'



const US7 = () => {
    var[obj,setObj]=useState({"brand":"odi","color":"blue","model":'m23',"year":"1998"})
        

     var hc1=()=>{
        if(obj.brand=="odi"){
            setCount({"brand":"scoda","color":"black","model":"e567","year":"1987"})
        }
       }
  return (
    <div>
      <button onClick={hc1}>change</button>
        
    <h2>my car i={obj.brand} {obj.color}{obj.year}{obj.year}</h2>
    
    </div>
  )
}

export default US7
