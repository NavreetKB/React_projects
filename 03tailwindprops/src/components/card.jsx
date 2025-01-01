import React from "react";

function Card(props)    //can directly take username,btntext,etc as arguments (can also pass default values like btntext="click here so it will take that value if not passed")
//..and directly use it instead of props.username . use all variables as{varname}       
//if no default value then the place remains empty
//function Card(username, btntext="visit") also valid          
 //use it like a vaiable {props.username} or in above case {username} 
{   console.log("props-username",props.username)
    return(
        <div>
           <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{props.username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
     {props.btntext||"click here"} →
    </button>
  </div>
</div>

        </div>
    )
}
export default Card//dont forget this
/*--------------------NOTES-------------------------
1. this a component which here is a card we can use this single file to  create multiple components of same type(i.e.) cards
2. now we can edit the data of individual card(component) using props 
3. Card function(component) is exported to app.jsx and app is exported to main.jsx and main.jsx is renderinfg to index.html
4. app vali file de funtion vich har component alag to inject ho rea so in each of it pass the required values (usename="bunny" age="22") and they can be directly used here as above.
 */