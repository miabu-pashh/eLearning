import "./App.css";

import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, SingleCoursePage, cart, Courses, Cart } from "./Pages";
import Video from "./Components/Video";
import Audio from "./Components/Audio";
import Book from "./Components/BookToOthers/Book";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Mvideo from "./Components/VideoToOthers/Mvideo";
import Maudio from "./Components/AudioToOthers/Maudio";
import Avideo from "./Components/AudioToOthers/Avideo";
import VAudio from "./Components/VideoToOthers/VAudio";
import Yt from "./Components/Yt";
import LoginPage from "./Pages/LoginPage"; // Ensure this path is correct based on your project structure
// import Feedback from "./components/Feedback";
import { Analysis } from "./Components/Analysis";

// ///KIDS SECTION

import KHomePage from "./Pages/KHomePage";

import MyComponent from "./Chatbot.js"; // Assuming 'chatbot.js' is in the same directory

function App() {

  

  return (
    <BrowserRouter>
    
     {/* <Navbar /> */}

      {/* <Sidebar/> */}

      <MyComponent />
      {/* <LoginPage/> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCoursePage />} />

        <Route path="/category/:category" element={<Courses />} />

        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/Home" element={<Home/>}/> */}
        <Route path="/Video" element={<Video />} />
        <Route path="/Audio" element={<Audio />} />
        <Route path="/Book" element={<Book />} />

        <Route path="/Mvideo" element={<Mvideo />} />
        <Route path="/Vaudio" element={<VAudio />} />
        <Route path="/Maudio" element={<Maudio />} />
        <Route path="/Avideo" element={<Avideo />} />
        <Route path="/YouTubePLayer" element={<Yt />} />
        <Route path="/Analysis" element={<Analysis />} />

        <Route path="/Khome" element={<KHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
