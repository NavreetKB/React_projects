import { useState } from "react"
function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen"
    style={{backgroundColor:color }} >
      <div className="fixed bottom-10 flex flex-wrap justify-center h-20 w-[80vw] mx-auto  inset-x-0 px-2 items-center border border-white-700 bg-white rounded-xl">
        < button onClick={()=>setcolor("red")} className="h-16 w-28 mx-1 bg-red-600 rounded-xl border-4  border-black ">
          RED
        </ button >
        < button onClick={()=>setcolor("blue")} className="h-16 w-28 mx-1 bg-blue-700 rounded-xl border-4  border-black ">
          BLUE
        </ button >
        < button onClick={()=>setcolor("green")} className="h-16 w-28 mx-1 bg-green-600 rounded-xl border-4  border-black ">
          GREEN
        </ button >
        < button onClick={()=>setcolor("purple")} className="h-16 w-28 mx-1 bg-purple-700 rounded-xl border-4  border-black ">
          PURPLE
        </ button >
        < button onClick={()=>setcolor("orange")} className="h-16 w-28 mx-1 bg-orange-600 rounded-xl border-4  border-black ">
          ORANGE
        </ button >
        < button onClick={()=>setcolor("black")} className="h-16 w-28 mx-1 bg-black rounded-xl border-4  border-black text-white ">
          BLACK
        </ button >
        < button onClick={()=>setcolor("white")} className="h-16 w-28 mx-1 bg-white rounded-xl border-4  border-black ">
          WHITE
        </ button >
        < button onClick={()=>setcolor("yellow")} className="h-16 w-28 mx-1 bg-yellow-500 rounded-xl border-4  border-black ">
          YELLOW
        </ button >
        < button onClick={()=>setcolor("pink")} className="h-16 w-28 mx-1 bg-pink-500 rounded-xl border-4  border-black ">
          PINK
        </ button >
          
      </div>
    </div>
    </>
  )
}

export default App


/*-------------------NOTES----------------------------
1. onclick expects a function (essentially its syntax) , if function is directly used than it will return some value to it which onclick does not need
2.tailwind css used alot
3.color is updated by the useState hook by passing its value directly 

*/