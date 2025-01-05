import React, { useContext } from "react";
import Usercontext from "../Context/Usercontext";


function Profile(){
    const {user}=useContext(Usercontext)
    
    if(!user) return <div>Please Login</div>
    
    return(
        <div>Welcome {user.name}</div>
    )
}

export default Profile
/* =========================NOTES===============================
1. here also we are using destructuring assignment and are initializing it with our store(usecontext) and since login da setuser will update these values so here we can simply use them as needed
 */