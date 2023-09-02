import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type // Here type : type can done it means that local and global can be same
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>
  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled","success");
      // changing the title whenever button is clicked
      document.title = "TextUtils - Dark";

      // creating a virus alert
      setInterval(() => {
        document.title = "PC Hacked !!!!";
      }, 100);
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled","success");
      document.title = "TextUtils - Light";
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title = "Konark Fires" mode = {mode} toggleMode ={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3"> 
    <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
      </div>
    </Router>
    </> 
  );
}

export default App;
 