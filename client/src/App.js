// importing components
import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// main app function
function App() {
  return (
    //displays each component on one page
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
