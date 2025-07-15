import React, { useState } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"} style={{ minHeight: "100vh" }}>
      <Navbar /> 
      <div className="container py-3">
        <button onClick={toggleTheme} className="btn btn-outline-secondary mb-3 float-end">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Home /> 
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact />        
      </div>
    </div>
  );
}

export default App;
