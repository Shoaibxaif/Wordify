import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Router>
        <Navbar title={"Wordify"} mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
             exact path="/"
              element={
                <Textform
                  heading={"Write Text Here To Analyze"}
                  mode={mode}
                  showalert={showalert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}  />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
