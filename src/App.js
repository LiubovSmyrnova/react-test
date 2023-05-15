//I read a lot on this website before I got some results in routing 
//https://reactrouter.com/en/main
import React from "react"; 
import {  
  BrowserRouter as Router,  
  Routes,  
  Route 
}   
from 'react-router-dom';  
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

function App() {
  return (
    <Router>
  <div>
    <Header />
    </div>
   
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" exact element={<About />}/>
      <Route path="/contact" exact element={<Contact />}/>
      </Routes>
      
    </div>
    
    </Router>
    );
}

export default App;

//I used this source to fight with router errors https://www.javatpoint.com/browserrouter-in-react*/}