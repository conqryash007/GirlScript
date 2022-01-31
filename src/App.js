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
import AboutUs from "./AboutUs";
import { Route , Routes } from 'react-router-dom';
import Main from "./Main";


function App() {
  
  return (
       <Routes>
         <Route exact path ="/" element = {<Main/>} /> 
         <Route exact path ="/Girlscript" element = {<Main/>} /> 
         <Route path = "/about"  element = {<AboutUs/>}/>
         <Route path = "/contact"  element = {<Contact/>}/>
         <Route path = "/track"  element = {<Track/>}/>
       </Routes>
  );
}

export default App;
