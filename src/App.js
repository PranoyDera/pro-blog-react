import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';




function App() {

 const [mode,setMode]=useState("light");
 const [textMode,setTextMode]=useState("dark");
 const [labelText,setLabelText]=useState("Enable dark mode");
 const [alert,setAlert]=useState(null);
 const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      }
      )
      setTimeout(() => {
        setAlert(null);
      },1500);
 }
 
 const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      setTextMode("light");
      setLabelText("Disable dark mode");
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode Has Been Enabled","success");

    }
    else
    {
      setMode("light");
      setTextMode("dark");
      setLabelText("Enable dark mode");
      document.body.style.backgroundColor='white';
      showAlert("Light mode Has Been Enabled","success");
    }
 }
return (
  <>
    
      <Navbar
        title="pro-blog"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        textMode={textMode}
        labelText={labelText}
      />
      <Alert alert={alert} /> 
      
            <TextForm
              heading="Enter text to analyze"
              textMode={textMode}
              mode={mode}
              showAlert={showAlert}
            />
         
  </>
);

}

export default App;
