import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Note from "./Note";
import Track from "./Track";
import Footer from "./Footer";
import Contact from "./Contact";
import Microsoft from "./Microsoft";
import Ideas from "./Ideas";

function Main() {
  return (
    <div>
      <Navbar />
      <Microsoft />
      <Ideas />
      <Home />
      <Note />
      <Track />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
