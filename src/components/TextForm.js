import React, { useState } from "react";

export default function TextForm(props) {
  //  2 Methods
  const handleUpClick = () => {
    console.log("Uppercase was Clicked");
    // Changing the letter to upper case
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Changed");
    // allow to add the value to the previous state before adding additional text
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("Copying");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard !!", "success");
  }

  const handleExtraSpaces = () =>
  {
    // splits a string into an array of substrings
    let newText = text.split(/[ ]+/); //split into array
    setText(newText.join(" "))
    props.showAlert("Extra Spaces removed !!", "success");
  }

  const [text, setText] = useState("Enter text (setText)");
  // text = "changin set" // Wrong way
  // setText = "Changing set";
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy to clipboard
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
