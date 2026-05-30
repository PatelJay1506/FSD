import { useState } from 'react'
import React from 'react'

const US8 = () => {
    const [data,setdata]=useState({})
    const hf =(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})

    }
  return (
    <div>
      <input type="text" name="fname" onChange={hf}/>
      <input type="text" name='lname' onChange={hf} />
      <h1>firstname:{data.fname}</h1>
      <h2>lastname:{data.lname}</h2>
    </div>
  )
}

export default US8
