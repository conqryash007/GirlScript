import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import Note from "./Note";
import Track from "./Track";
import Footer from "./Footer";
import Contact from "./Contact";
import Microsoft from "./Microsoft";
import Ideas from "./Ideas";
import Challenge from "./Challenge";
import Team from "./Team";

 function Main() {
  return (
      <div>
      
        <Navbar/> 
        <Microsoft/>
        <Ideas/>
        <Home/>
        <Note/>
        <Track/>
        <Contact/>
        <Footer/>
      </div>
        
  );
};

export default Main ;
