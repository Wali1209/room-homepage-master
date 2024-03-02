import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/room-homepage-master/" element={<Home />}></Route>

        <Route path="/room-homepage-master/shop" element={<Shop />} />
        <Route path="/room-homepage-master/about" element={<About />} />
        <Route path="/room-homepage-master/contact" element={<Contact />} />
      </Routes>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Wali1209" target="_blank">
          M Wali
        </a>
        .
      </div>
    </Router>
  );
}

export default App;
