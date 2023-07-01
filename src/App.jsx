// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b4b5b";

      showalert("DarkMode is Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("LightMode is Enabled", "Success");
    }
  };
  return (
    <>
      <Navbar title={"Textify"} mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <Textform
          heading={"Write Text Here To Analyze"}
          mode={mode}
          showalert={showalert}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
