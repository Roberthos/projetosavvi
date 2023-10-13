import whats from "../../assets/whats.svg";
import insta from "../../assets/insta.svg";
import face from "../../assets/face.svg";
import icon_line from "../../assets/icon_line.svg";
import icon_search from "../../assets/icon_search.svg";
import icon_mail from "../../assets/icon_mail.svg";
import icon_car from "../../assets/icon_car.svg";
import logo from "../../assets/logo.png";
import nav from "./nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="firstbar">
        <h3>LOJA 100% INTEGRADA AO MERCADO LIVRE</h3>
      </div>

      <div className="logo_main">
        <div classname="nets_main_left">
          <img src={whats} alt="logo do site" />
          <img src={insta} alt="logo do site" />
          <img src={face} alt="logo do site" />
        </div>
        <div className="nets_main_center">
          <img src={logo} alt="logo do site" />
        </div>
        <div classname="nets_main_right">
          <img src={icon_line} alt="logo do site" />
          <img src={icon_search} alt="logo do site" />
          <img src={icon_mail} alt="logo do site" />
          <img src={icon_car} alt="logo do site" />
        </div>
      </div>

      <div className="menubar">
        <a href>Anéis</a>
        <a href>Brincos</a>
        <a href>Colares</a>
        <a href>Pingentes</a>
        <a href>Pulseiras e Braceletes</a>
        <div class="dropdown">
          <a class="marcas">Marcas</a>
          <div class="dropdown-content">
            <a href="#">Vivara</a>
            <a href="#">Hstern</a>
            <a href="#">Monte Carlo</a>
            <a href="#">Carla Amorim</a>
            <a href="#">Bruner</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
