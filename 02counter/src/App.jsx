import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(12)  
  //let counter =5;
  const addvalue=()=>{
    //counter=counter+1;
    if(counter<20){
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      console.log("the add value function is working"+counter)
    }
   
  }
  const removeval=()=>{
    console.log("the remove value function is working");
    if(counter>0)
    {
      setCounter(counter-1);
      console.log(counter)
    }
    else
      console.log("the current value of counter is "+counter)
  }
  return (
    <>
      <h1> Apple </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value to {counter}</button>
      <br/><br/>
      <button onClick={removeval}>Remove Value from {counter}</button>
    </>
  )
}

export default App

/*-----------------------------notes-----------------------------
1. the use of counter variable is multiple times 
2. in classic javascript you would have to grab all these elements of UI by using get element by id or class etc. and inject it everywhere
3. react makes this task easier using "HOOKS". UI updation is controlled by react
4.the variable declared by us (counter) changes on increment but that change is not reflected in UI.
5. const[varname,method]=useState(default val)
   and call this method when change in varname's value is needed
6. the method setcounter can be any name ,,,on calling takes the new value that you want the variable to have
7. usestate bundles together all the updates which are to be sent to the UI so if multiple set counters : 
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
    will be bundled together and since all have the same task so the increment will be of only 1 and not 3!!!
8. although not optimised but if necessary to increment so then :
    usestate's setcounter method comes with a hidden call back function which can be used because it will return the counter value so in call back we call it as prevCounter and increment
    
*/