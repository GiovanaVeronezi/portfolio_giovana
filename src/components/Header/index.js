import Perfil from "../Perfil";
import "./estilo.css";

function Header() {
  return (
    <header className="header">

      
      <Perfil />

      <div className="header-content">
        <h1>Giovana Moraes Veronezi</h1>
        <p>Desenvolvedora Front-End em formação</p>

        <div className="links">
          <a href="mailto:gimveronezi@gmail.com">E-mail</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="https://github.com/">Github</a>
        </div>
      </div>

    </header>
  );
}

export default Header;
