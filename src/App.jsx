import { useState } from "react"


function App() {

   const [color, setColor] = useState("black")

   const changeColor = (e) =>{
      let a = e.target.innerHTML;
      setColor(a.toLowerCase())
   }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}>

      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl gap-3">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={changeColor}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={changeColor}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={changeColor}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow" , color: "black"}} onClick={changeColor}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "aqua"}} onClick={changeColor}>Aqua</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink", color: "black"}} onClick={changeColor}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "beige", color: "black"}} onClick={changeColor}>Beige</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "brown"}} onClick={changeColor}>Brown</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}} onClick={changeColor}>Black</button>
        </div>

      </div>


    </div>
  )
}

export default App
