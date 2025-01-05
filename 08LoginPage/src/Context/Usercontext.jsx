import React from "react";

const Usercontext= React.createContext()

export default Usercontext;


/* ========================NOTES===============================
1. usercontext will act like a store for all the components 
   eg. we want a card component inside the right side bar in the footer of the home page of the website so the card component will be passed to home (just to be passed on and not of any use to itself) and so on to reach the right side bar of footer. so we use context api to avoid this passing 
2. we use usercontext as parent and all its children(components passed     inside it would have access to its components)
         context api===global variable

3.const Usercontext = React.createContext();: This line creates a new React context object called Usercontext. A context in React is used to pass data through the component tree without having to pass props down manually at every level.
*/

