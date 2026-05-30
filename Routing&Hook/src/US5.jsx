import React from 'react'
import { useState } from 'react'
import img1 from "./assets/images.jpg"
import img2 from "./assets/images(1).jpg"


const US5 = () => {
    var[count,setCount]=useState(img1)
        

     var hc1=()=>{
            setCount(img2)
           
       }
  return (
    <div>
      <button onClick={hc1}>change</button>
        

    <img src={count} alt="" height="400px" width="400px" />
    </div>
  )
}

export default US5
