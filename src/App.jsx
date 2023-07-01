// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#3b4b5b'
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar title={"Textify"} mode={mode} togglemode={togglemode} />

      <div className="container" >
        <Textform heading={"Write Text Here To Analyze"} mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
