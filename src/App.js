import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Welcome from "./Components/Welcome";
import PostBlog from "./Components/PostBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/postblog" element={<PostBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

