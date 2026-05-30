import { useState } from 'react'
import React from 'react'

const US9 = () => {
    const [data,setdata]=useState({})
    const [result,setresult]=useState()
    

    const hf =(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})

    }
   const hf2 =(e)=>{
    setresult(parseInt(data.n1)+parseInt(data.n2))
    
   }
   const hf3 =(e)=>{
    setresult(parseInt(data.n1)-parseInt(data.n2))
    
   }
    const hf4 =(e)=>{
    setresult(parseInt(data.n1)*parseInt(data.n2))
    
   }
    const hf5 =(e)=>{
    setresult(parseInt(data.n1)/parseInt(data.n2))
    
   }
  return (
    <div>
      <input type="text" name="n1" onChange={hf}/>
      <input type="text" name='n2' onChange={hf} />
      <h1>n1:{data.n1}</h1>
      <h2>n2:{data.n2}</h2>
      <button onClick={hf2}>add</button>
      <button onClick={hf3}>sub</button>
      <button onClick={hf4}>multi</button>
      <button onClick={hf5}>divide</button>

      <h2>{result}</h2>
    </div>
  )
}

export default US9
