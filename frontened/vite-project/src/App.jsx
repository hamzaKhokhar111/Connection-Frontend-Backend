import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/jokes').then((resp)=>{
      setjokes(resp.data)
    }).catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      
      <h1>Hamza and his Jokes</h1>
      <p>jokes {jokes.length}</p>
      {
        jokes.map((jokes)=>(
          <div key={jokes.id}>
            <h3>{jokes.tittle}</h3>
            <h2>{jokes.content}</h2>
          </div>


        ))
      }
      
    </>
  )
}

export default App
