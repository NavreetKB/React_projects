import React ,{ useContext, useState } from "react";
import Usercontext from "../Context/Usercontext";

function Login(){
    const [name,setname]= useState("")
    const [phone,setphone]=useState(0)
    const [email,setemail]=useState("")
    const {setuser}=useContext(Usercontext)

    const handlesubmit=(e)=>{
        e.preventDefault()
        setuser({name},{email})
    }
    
    return(
       <>
       <h1>Login Form</h1>
       <div >
         <label>Name</label>
         <input type="text" placeholder="enter your name" 
         value={name} onChange={(e)=>setname(e.target.value)}/>
         <br/><br/>
         <label>Phone number</label>
         <input type="digit"
         value={phone} onChange={(e)=>setphone(e.target.value)}/>
         <br/><br/>
         <label>Email ID</label>
         <input type="email"
         value={email} onChange={(e)=>setemail(e.target.value )}/>
         <br/><br/>
         <button onClick={handlesubmit}>Submit</button>
       </div>
       </>

    )
}

export default Login 
/*============================NOTES==============================
1. here setuser is the method that will update the user data and is in destructured and initialised by usecontext file
2. the data is updated  as:
     value={name} onChange={(e)=>setname(e.target.value)} is important syntax
3. on submission the new data is passed in setuser and will be updated everywhere
  
 */