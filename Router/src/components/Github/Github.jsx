import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data =useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])

    return(
        <div className="h-[50vh] rounded-3xl w-[80vw] border-x-4 border-y-4 border-orange-700 text-3xl mx-auto">
             Github followers: {data.followers}
             <img className="h-[30vh] rounded-full mx-5" src="" alt="" />
        </div>
    )
}


export default Github


export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json()
}




/* =========================== NOTES ================================
1. using an API to get the github data
2. USEEFFECT HOOK: it is hook used to perform side effects in a funciton like fetching data etc. 
 it takes a) a callback function (jo task karna hai)
          b) and a dependency array (can be empty) ki ehna vicho j koi v change hunda tan dubara function run karna and oh re-render karna
3. usually function{
                     const[data,setdata]=usestate(def. val or array or obj)
                     useeffect{()=>{
                         any updation in the state of data.
                        },[] }
                   }

4. here in usefeect we are fetching an API.then converting it to json() format. then updating the data with the response of the current .then
5.the usestate is to initialise the default value of data and then updatind as required using the setdata method

6. now you can use the necessary keys like data.followers and use it in {}
and return that div
*/