import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience/>
      <Projects/> 
      <Skills />
      <Contact />
    </div>
  );
}

export default App;