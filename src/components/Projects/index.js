import "./estilo.css";
import projeto1 from "../../Imagens/projeto-1.png";
import projeto2 from "../../Imagens/projeto-2.png";
import projeto3 from "../../Imagens/projeto-3.png";

function Projects() {
  return (
    <section className="projects">
      <h2>Projetos</h2>

      <div className="portfolio-grid">

        <div
          className="project-card"
          style={{ backgroundImage: `url(${projeto1})` }}
        >
          <a
            href="https://carrinho-de-compras-psi-red.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>

        <div
          className="project-card"
          style={{ backgroundImage: `url(${projeto2})` }}
        >
          <a
            href="https://jogo-six-peach-69.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>

        <div
          className="project-card"
          style={{ backgroundImage: `url(${projeto3})` }}
        >
          <a
            href="https://sorteador-de-numero-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;