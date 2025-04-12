import React from "react"
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import About from "./pages/About.jsx"
import Contact  from "./pages/Contact.jsx";

function App() {


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
