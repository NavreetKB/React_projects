import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { githubInfoLoader } from './components/Github/Github.jsx'

//method 1 for router (syntax1)
// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"/About",
//         element: <About/>
//       },
//       {
//         path:"/Contactus",
//         element:<Contactus/>
//       }
//     ]
//   }
// ])

//method 2 for router (syntax 2) just readablity difference
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contactus' element={<Contactus />} />
      <Route path='User/:userid' element={<User/>}/> 
      <Route 
      loader={githubInfoLoader}
      path='/Github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
//this <name of the component/> is the syntax to render a component
//user/:userid is the syntax(/:) and whatever parameter you have written here ......you will get the access of that in the componet file which has been renderd(here it is the user file ........make sure that in that file you use the same name of parameter as used here like Userid )

//eh values (user id ) sab url ton a rahiya (basically router is all about website url routes)

/*=========================NOTES================================
1. here we are creating a router (2method with just readability difference)
   createbrowserRouter is a method to create a router
   const router is what we are are using in the createroot element
2. method 2 vich we have used create router from elements
   Layout is the parent component and all others are children inside it (which as written in layout file, will be matched by the outlet {placehoder} according to url and rendered to display)
3. parent <Router></Router> and children <Router/>

4. path='/name' same name to be used in to="" in navlink 
   and the element to render {<component/>}
   
5. jo v component use karna us nu import karna (make sure k oh exported hove)
  or just import them in index.jsx file and no need to import every single one here as index.jsx is automatically imported
*/