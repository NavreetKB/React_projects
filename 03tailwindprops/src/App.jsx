import { useState } from 'react'

import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let myobj={
  //   name:"vir",
  //   class:"6",
  //   age:"11"
  // }
  // let arr=[1,2,3,4,5]
  return (
    <>
      <h1 className='bg-blue-700 text-black p-5 rounded-2xl mb-5'>This is the sentence in App function</h1>
       <Card username="Bunny" btntext="View Bunny's profile"/>
       <Card username="Harry" btntext="check out my profile"/>
       <Card username="jimmy" />
       <Card username="Jane" />
      
    </>
  )
}

export default App
