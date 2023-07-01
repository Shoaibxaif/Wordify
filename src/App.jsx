// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title={"Textify"} />

      <div className="container">
        <Textform heading ={"Write Text Here To Analyze"} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
