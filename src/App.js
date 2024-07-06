import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";
import ToolsExperience from "./components/Tools&experience/Tools&experience";
import Services from "./components/Services/Services";
import Education from "./components/Eductaions/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="tools">
        <ToolsExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
