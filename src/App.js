import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Events from './Events';
import Contact from './Contact';
import Register from './Register';
import './Main.css';
import "./Events.css";
import "./Reg.css";
function App() {
  return (<>
<Routes>
  <Route
  path="/"
    element={<>
  <Header/>
  <Home/></>}
  />
  <Route
  path="/about"
element={<><Header/>
<About/></>}
  />
  <Route
  path="/events"
element={<><Header/>
<Events/></>}
  />
  <Route
  path="/contact"
element={<><Header/>
<Contact/></>

}
  /><Route
  path="/register"
element={<>
<Register/></>}/>
</Routes>
  
  </>  
  );
}

export default App;
