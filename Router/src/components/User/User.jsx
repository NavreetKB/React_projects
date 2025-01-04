import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid}= useParams() //just a hook (method ) that gives you the parameters passed.........jo bhi url mein ayega uska access mil jaega
   return(                       
    <div className="h-14 w-[70vw] bg-orange-700 font-bold text-2xl text-white mx-auto border-4 rounded-2xl my-4">
        User  :  {userid}
    </div>
   )
}

export default User

/* ========================  NOTES  ====================================
1. Here we have dynamically taken value passed in the url by the user
   functionality: if an ID is passed we can accordingly display the page
2. hooks are just function that let you hook the state of data/varible/component 

3. USEPARAMS: is a hook that allows you to access the parameters of the curret route.
useparams returns an OBJECT that has all the dynamic parameters of the current route.....destructuring with curly braces{} helps to directly extract the parameters you need
    * if { userid} is not used then accessing would be like
        const params=useparams();
        const userid=params.userid;
appan useparams nu use kita and jo bhi auga ohnu userid vich store karva leya

4. now wherever you want to display userid just simply use {userid}
 */