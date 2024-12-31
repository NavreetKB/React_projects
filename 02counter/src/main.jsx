import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



/*-----------------------notes------------------------------
1. Virtual DOM: javascript tracks the entire dom tree and makes it own virtual dom tree and  changes in only the elements as required ,,,,entire dom is not changed again.
2. Normal DOM: in this if an element is changed then the entire web structure is renewed(reloading).
3. creatRoot makes use of virtual dom and hence makes updates

*/
