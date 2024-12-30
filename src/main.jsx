import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

 function Myapp()
 {
  return(
    <>
    <h1>this line is written in Myapp function </h1>
    </>
  )
 }
//  const ReactElement={       //an object->key value pair
//   type:'a',               //type of tag <a> or any other
//   props:{
//       href :'https://google.com',
//       target: '_blank'
//   },
//   children:'click me to visit google'
// }


const newreactElement = React.createElement(
  'a',
  { href:'https://google.com', target:'_blank'},
  'click here if you wish to visit Google'

)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App/>
 
)
/*-------------------NOTES----------------------------------
//this is just a function but the syntax is of jsx but 
1* the syntax is taken care by react .....react doesnt understand the html  code it understands the tree format which we gave in js reactElement .....it converts this myapp function to that format itself
2* react is javascript only so apart from convention you can also call it in root element as Myapp()....like a normal function. 
3* the use of reactelement directly did not work.....so creating another element
4* same format 1st tag,then attributes then the text to display(all 3 compulsory but may be empty) then an evaluated expression(optional  )
*/