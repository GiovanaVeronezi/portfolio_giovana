import Imagens from "../../Imagens/fotoPerfil.jpeg";
import "./estilo.css"

function Perfil(){
    return(
        <div className="perfil-container">
      <img src={Imagens} alt="Minha foto" className="foto-perfil" />
    </div>

    );
}

export default Perfil