import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Restaurant from "./components/Restaurant.js";
import Rooms from "./components/Rooms.js";

function App() {
  return (
    <>
     <Router>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Restaurant' element={<Restaurant />}></Route>
        <Route path='/Rooms' element={<Rooms />}></Route>
        </Routes>
      </Router>
 
    </>
  );
}

export default App;
