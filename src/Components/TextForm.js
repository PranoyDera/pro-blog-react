import React, { useState } from 'react';

function FormComponent(props) {
  const [text, setText] = useState("");

  const handelUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase","success");
  }

  const handleOnchange=(event)=>{
    setText(event.target.value)

  }

  const handelLowClick=()=>{
    let lowText=text.toLowerCase();
    setText(lowText);
    props.showAlert("Text Converted to Lowercase","success");
  }

  const handelCopyToClipboard = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied to clipboard","success");
  }

  const handelClearText = () => {
    let newText='';
    setText(newText);
    props.showAlert("Text cleared","success");
  }

  return (
   <>
   <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
   <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="messageTextarea"
          rows="8"
          value={text}
          onChange={handleOnchange}
          spellCheck="true"
          lang='en'
          style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button type='button' className={`btn btn-${props.textMode} `}onClick={handelUpClick}>Convert to uppercase</button>
      <button type='button' className={`btn btn-${props.textMode} mx-3`} onClick={handelLowClick}>Convert to lowercase</button>
      <button type='button' className={`btn btn-${props.textMode} mx-1.5`}  onClick={handelCopyToClipboard}>Copy to Clipboard</button>
      <button type='button' className={`btn btn-${props.textMode} mx-3`}  onClick={handelClearText}>Clear Text</button>
      <div className="container my-3 ">
        <h2>Text Summary</h2>
        <p>
        <b>
        {text.trim() === ""
         ? "0 words and 0 characters"
          : `${text.trim().split(/[\s\n]+/).filter((word) => word !== "").length} words and ${
          text.length
        } characters`}
       </b>
         </p>

        <p><b>{0.008*text.split(" ").length} minutes read time</b></p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}

export default FormComponent;