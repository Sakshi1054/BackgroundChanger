import {useState} from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200 pt-2" 
    style={{backgroundColor:color}}
    >
      <div className=" bottom-12 insert-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg w-18 bg-white px-3
        py-2 rounded-3xl">
        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>Red</button>

        <button 
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>Green</button>

        <button 
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>Blue</button>

        <button 
        onClick={() => setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}>Black</button>

        <button 
        onClick={() => setColor("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "orange"}}>Orange</button>
      </div>
    </div>
    </div>
  )
}

export default App
