import footer from "./footer.css";
import mercado from "../../assets/mercado.png";
import savvi from "../../assets/savvi.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first_footer">
        <div className="newsletter">
          <p>NEWSLETTER</p>
        </div>
        <div className="texto">
          <p>
            Cadastre-se na nossa Newsletter para receber todas as nossas
            novidades e promoções especiais!
          </p>
        </div>
        <div className="event">
          <input
            className="email"
            type="text"
            name="email"
            placeholder="Digite seu email"
          />
          <button
            className="button_send"
            type="submit"
            onClick={() => {
              window.dataLayer.push({ event: "send" });
            }}
          >
            Enviar
          </button>
        </div>
      </div>
      <div className="info">
        <div className="white_image">
          <img
            className="image_config"
            src={require("../../assets/logo_branca.png")}
            alt="imagem deu erro"
          />
        </div>
        <div className="about">
          <p>Sobre nós</p>
          <p1>
            Joalheria especializada na comercialização de joias usadas de grife
            e alta joalheria. Procedência, garantia e autenticidade certificadas
            no melhor preço do mercado
          </p1>
        </div>
        <div className="info_category">
          <p className="p1">Categorias</p>

          <div className="div_category">
            <a>Anéis</a>
            <a>Brincos</a>
            <a>Colares</a>
            <a>Pingentes</a>
            <a>Pulseiras e Braceletes</a>
            <a>Promoção</a>
          </div>
        </div>
        <div className="contact">
          <div className="contact_main">
            <p1>Contato</p1>

            <img
              src={require("../../assets/insta_white.png")}
              alt="imagem deu erro"
            />
            <img
              src={require("../../assets/face_white.png")}
              alt="imagem deu erro"
            />
          </div>
          <p>
            <img
              src={require("../../assets/whats_white.png")}
              alt="imagem deu erro"
            />
            (19) 98193-9732
          </p>
          <p>
            <img
              src={require("../../assets/email_white.png")}
              alt="imagem deu erro"
            />
            contato@ribeirosjoalheiros.com.br
          </p>
        </div>
      </div>
      <div className="infos">
        <div className="adress">
          <p>Ribeiro Joalheiros - 46.212.381/0001-73</p>
          <p>
            <img
              src={require("../../assets/icon_pin.png")}
              alt="imagem deu erro"
            />
            Rua Álvares Machado - 952 - Campinas - São Paulo
          </p>
        </div>
        <div className="buy">
          <p>Como comprar?</p>
        </div>
        <div className="buy">
          <p>Como cuidamos da sua privacidade?</p>
        </div>
      </div>
      <div className="last_foot">
        <img
          className="image_config1"
          src={require("../../assets/mercado.png")}
          alt="imagem deu erro"
        />
        <img
          className="image_config2"
          src={require("../../assets/savvi.png")}
          alt="imagem deu erro"
        />
      </div>
    </div>
  );
};
export default Footer;
