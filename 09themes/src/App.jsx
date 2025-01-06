import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/Themebtn'
import Card from './Components/Card'

function App() {
  
  const [themeMode,setThememode]=useState("light")

  const lightTheme=()=>{
       setThememode("light")
  }  //defined the function created in the context
  const darkTheme=()=>{
       setThememode("dark")
  }
  //actual change in theme
  useEffect(()=>{
     document.querySelector('html').classList.remove("light","dark")
     document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
       <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
         <div className="w-full">
           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>  {/*a component  */}
           </div>
          
           <div className="w-full max-w-sm mx-auto">
             <Card/>
           </div>
          </div>
       </div>
       </ThemeProvider> 
    </>
  )
}

export default App
/*============================NOTES==============================
In your main entry file (e.g., index.js or App.js), wrap your application with the ThemeProvider to make the theme context available throughout the component tree

we have passed certain values (here all those values created in context) which are allowed to be accessed by all those wrapped in provider

and what is themeprovider: as defined in theme.js file it is just themecontext.provider
*/
