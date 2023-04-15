import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Welcome from "./Components/Welcome";
import PostBlog from "./Components/PostBlog";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import MyBlogs from "./Components/MyBlogs";
import Widgets from "./Components/Widgets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/postblog" element={<PostBlog />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/widget" element={<Widgets />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

