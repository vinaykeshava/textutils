import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switches,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Vinay" aboutText="About Textutils" aboutlink="www.msrit.edu" mode={mode} togglemode={togglemode} />
        <Alert alert={'This is alert'} />
      <dic className="container my-3"></dic>
        <Switches>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <Textform heading="Enter the text to analyse" />
          </Route>
        </Switches>
      </Router>
    </>
  );
}

export default App;
