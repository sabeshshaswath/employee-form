import React, { useState } from 'react'
import axios  from 'axios'


const Login = () => {
    const [name,SetName]=useState("")
    const [salary,SetSalary]=useState(0)
    const [doj,SetDoj]=useState("")
    const handlesubmit=async(e)=>{
        try{
        e.preventDefault();
        await axios.post('http://localhost:3002/data',{name,doj,salary})
        alert("Submitted")
        }
        catch(e){
            alert("Invalid input")
        }
    }
  return (
    <form action="" onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={(e)=>SetName(e.target.value)} required/>
        <div>
        <label htmlFor="doj">Date of join</label>
        <input type="date" id='doj'onChange={(e)=>SetDoj(e.target.value)} required/>
        </div>
        <label htmlFor="salary">Salary</label>
        <input type="number" id='salary' onChange={(e)=>SetSalary(e.target.value)} required/>
        <div>
        <button type='submit'> Submit</button>
        </div>
    </form>
  )
}

export default Login