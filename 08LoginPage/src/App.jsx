import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UsercontextProvider from './Context/UsercontextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'

function App() {
 
  return (
    <>
     
     <UsercontextProvider>
        
        <h1>Welcome to the website</h1>
        <Login/>
        <Profile/>
     </UsercontextProvider>
    </>
  )
}

export default App

/*=============================NOTES==================================
1. here the usecontextprovider is parent and all components used inside it  are its children
in usecontext provider function whatever values will be passed all children will independtly have access to them
 */
