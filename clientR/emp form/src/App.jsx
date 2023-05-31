import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [emp, setEmp] = useState([])
  useEffect(()=>{
    const getdata=async()=>{
      const response=await axios.get("http://localhost:3002/empdetail")
      // console.log(response.data)
      const data=response.data
      setEmp(data)
    }
    getdata()
  },[])

  useEffect(()=>{
    console.log(emp)
    console.log("hi")
  },[emp])

  return (
    <div>
          {emp.map((val,index)=>{
          {console.log(val)}
            return(
              <ul>
             <h1>Employee {val.id}</h1>
              <li>Name:{val.name}</li>
              <li>Salary:{val.salary}</li>
              <li>Date-of-join:{val.doj}</li>
              </ul>
            )
          })}
        
    </div>
  )
}

export default App
