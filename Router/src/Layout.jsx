import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout

/*-----------------------------Notes------------------------------
1. REACT ROUTER:  it is a library for routing in react applications. it allows you to define routes in your app and navigate between them
basically it helps when you create a navbar and you route various tabs in the same url when you click on them
2. RENDERING : it means to generate a visual repesentation of the react component........re-rendering means when any props or state of component change then DOM  updates itself by comparing the new render output with the previous one (reconciliation) and updates only that part of the DOM (vitual DOM)
3. RENDERING METHOD: any method that has the info of how UI should look like is the rendering method that will render and its jsx is converted into DOM nodes by react.
any change in state of any variable in that method will cause it to re-render

4.here layout is the parent component.....the outlet component is a placeholder that renders(gives) its child . outlet serves as a placeholder for rendering the MATCHED child route component..........here we want k header and footer same place te rehn just vich da content change ho jave based on the tab clicked by user in navbar.
*/


