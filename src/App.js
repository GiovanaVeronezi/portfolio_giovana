import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Experiencia from "./components/Experiencia";
import Projetos from "./components/Projetos";
import Skills from "./components/Skills";
import Contato from "./components/Contato";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Sobre/>
      <Experiencia/>
      <Projetos/> 
      <Skills />
      <Contato/>
    </div>
  );
}

export default App;