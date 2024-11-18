import React, {useState}  from 'react';

function About() {

  const [myStyle,setMyStyle]=useState(
    {
      color: 'black',
      backgroundColor: 'white'
    }
  )

  const [btnText,setBtnText]=useState("Enable Dark Mode")

  const toggleStyle=()=>{
    if (myStyle.color==='white')
    {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border:'2px solid white'
      });
       setBtnText("Enable Light Mode");
      }
      else{
        setMyStyle({
          color: 'white',
          backgroundColor: 'black'
        });
        setBtnText("Enable Dark mode");
      };
    }
  return (
    <div className="container" style={myStyle}>
      <h1 className="heading my-3">About us</h1>
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            style={myStyle}
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={myStyle}>
            This is a blog website
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
            style={myStyle}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={myStyle}>
            You can write and edit your blogs,in this website
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
            style={myStyle}
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={myStyle}>
            This blog website provide copy,uppercaseand lowerCase features
          </div>
        </div>
      </div>
    </div>
    <div className="modeBtn">
    <button type="button" className="btn btn-dark" onClick={toggleStyle}>{btnText}</button>
    </div>
    </div>
  );
}

export default About;
