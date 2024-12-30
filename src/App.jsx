import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cartoon from "./myfirst.jsx"


function App() {
  
 const username='Navreet Kaur'
 return(
    <>
    <Cartoon/> {username}
    </>
 )
}

export default App
/* -------------------NOTES----------------------
1*{username} is called evaluated expression
2*cannot use any evaluation like(if(true) {username}) or loops
3* can use such statements in the parent function itself
*/