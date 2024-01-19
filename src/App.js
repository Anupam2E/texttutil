import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar'
import TextForm from'./components/TextForm'
import About from'./components/About'
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (<>
<Router>

  
 <Navbar title="Ubuntu" aboutText="About Ubuntu"/> 
{/* use the above line to pass title as variable that can be changed */}
<div className="container">
 <Routes>
          <Route exact path="/about" element={<About />}>
          
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text for analysis"/>}>
          
          
          </Route>
</Routes> 


</div>
  
</Router>
  </>
  );
}

export default App;
