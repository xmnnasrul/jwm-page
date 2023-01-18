import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Jasa from "./Components/Jasa/Jasa";
import Contact from "./Components/Contact/Contact";
import Navbarr from "./Components/Navbar/Navbar";
import Rules from "./Components/Rules/Rules";
import Project from "./Components/Project/Project";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/jasa" element={<Jasa />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
