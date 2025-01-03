import { useState,useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]= useState(false)
  const [characterAllowed,setcharacterAllowed]= useState(false)
  const [password, setpassword]= useState("")
 
  const passwordGenerate= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 
    if(numberAllowed)
        str+="0123456789";
    if(characterAllowed)
        str+="~!@#$%^&*-+="
    
    for(let i=1;i<=length;i++)
    {
      let randomIndx= Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(randomIndx)
    }
    setpassword(pass)

  },[length,numberAllowed,characterAllowed,setpassword])
  
  useEffect(()=>{
  
    passwordGenerate()
  },[length,numberAllowed,characterAllowed,passwordGenerate])

  const passwordRef=useRef(null)

  const copyToClipboard=useCallback(()=>
    {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    }
    ,[password])
  
  return (
    <>
      <h1 className='text-5xl my-5 text-center text-orange-500 font-mono'>Password Generator</h1>
      <div className='w-[80vw] h-32 flex flex-col items-center mt-10 mx-auto rounded-xl bg-gray-900 text-xl text-lime-500'>
        <div className='my-5 text-lg text-black '>
          <input
           className='w-[70vw] h-12 mx-auto rounded-xl bg-white'
           type="text" value={password} placeholder='Password' readOnly
           ref={passwordRef}
           />
           <button 
            
           onClick={copyToClipboard}
           
           className='w-[5vw] h-12 rounded-xl mx-4 hover:bg-blue-500  bg-blue-700 '>
             Copy
           </button>
        </div>
        <div>
           <input
           className='cursor-pointer mx-3'
            type="range" min={8} max={100} value={length}
            onChange={(e)=> {setlength(e.target.value)}}
            /><label className='mr-4'>Length  :  {length} </label>
            <input className='mx-1'
             type='checkbox'
             defaultChecked={numberAllowed}
             onChange={
              ()=>{
                setnumberAllowed((prev)=>!prev)
              }
             }
            /><label className='mr-4'>Numbers</label>
            <input
            type='checkbox' 
            defaultChecked={characterAllowed}
            onChange={
              ()=>{
                setcharacterAllowed((prev)=>!prev)
              }
            }
            /><label className='mr-4'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
