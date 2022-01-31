import Track from "./Track";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/track" element={<Track />} />
    </Routes>
  );
}

export default App;
