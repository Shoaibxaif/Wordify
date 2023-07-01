import React, { useState } from "react";

const Textform = (props) => {
  const changetoUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changetoLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const changetoCamelCase = () => {
    let newText = function textToCamelCase(text) {
      var words = text.toLowerCase().split(" ");
      var camelCase = words.map(function (word, index) {
        if (index === 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return camelCase.join("");
    };

    setText(newText);
  };
  const changetoUnicode = () => {
    let newText = function convertToUnicode(str) {
      let unicode = "";

      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        unicode += "\\u" + ("0000" + charCode.toString(16)).slice(-4);
      }

      return unicode;
    };

    setText(newText);
  };

  const changetoText = () => {
    let newText = function convertUnicodeEscapes(str) {
      return str.replace(/\\u([\dA-F]{4})/gi, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      });
    };

    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const clearAll = () => {
    setText("");
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div
        className="my-5"
        style={{ color: props.mode === "dark" ? "white" : "#3b4b5b" }}
      >
        <h1 className="my-3 ">{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          col="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#3b4b5b" : "white",
            color: props.mode === "dark" ? "white" : "#3b4b5b",
          }}
        ></textarea>
        <button
          className={`btn btn-${
                  props.mode === "light" ? "info" : "dark"
                } my-3 mx-1`}
          onClick={changetoUpper}
        >
          Convert to UpperCase
        </button>
        <button className={`btn btn-${
                  props.mode === "light" ? "info" : "dark"
                } my-3 mx-1`} onClick={changetoLower}>
          Convert to LowerCase
        </button>
        <button className={`btn btn-${
                  props.mode === "light" ? "info" : "dark"
                } my-3 mx-1`} onClick={changetoCamelCase}>
          Convert to CamelCase
        </button>
        <button className={`btn btn-${
                  props.mode === "light" ? "info" : "dark"
                } my-3 mx-1`} onClick={changetoUnicode}>
          Convert to Unicode
        </button>
        <button className={`btn btn-${
                  props.mode === "light" ? "info" : "dark"
                } my-3 mx-1`} onClick={changetoText}>
          Convert Unicode to Text
        </button>
        <button className={`btn btn-${
                  props.mode === "light" ? "info" : "dark"
                } my-3 mx-1`} onClick={clearAll}>
          Clear All
        </button>

        <h2>Summary</h2>
        <p>Character : {text.length}</p>
        <p>Words : {text.split(" ").length - 1}</p>
        <p>Lines: {text.split("\n").length - 1}</p>

        <div className="container preview">
          <h2>Preview</h2>
          {text}
        </div>
      </div>
    </>
  );
};

export default Textform;
