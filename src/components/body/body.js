import carousel_img from "../../assets/carousel_img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../../assets/logo.png";
import cellphone from "../../assets/cellphone.svg";
import money from "../../assets/money.svg";
import screen from "../../assets/screen.svg";
import card from "../../assets/card.svg";
import { products } from "../../mock/products";
import Colares from "../../assets/Colares.png";
import Brincos from "../../assets/Brincos.png";
import Pingentes from "../../assets/Pingentes.png";
import Pulseiras from "../../assets/Pulseiras.png";
import Anéis from "../../assets/Anéis.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import body from "./body.css";
import vivara from "../../assets/vivara.png";
import logo_bruner from "../../assets/logo_bruner.png";
import logo_antonio_bernardo from "../../assets/logo_antonio_bernardo.png";
import hstern from "../../assets/hstern.png";
import carla_amorim from "../../assets/carla_amorim.png";
import monte_carlo from "../../assets/monte_carlo.png";
import tiffany from "../../assets/monte_carlo.png";
import jack from "../../assets/jack.png";
import animale from "../../assets/animale.png";

const Body = () => {
  console.log(products);
  return (
    <div className="body">
      <div className="main_carousel">
        <div className="prin_carousel">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, HashNavigation]}
            className="mySwiper"
          >
            <SwiperSlide data-hash="">
              <div className="main_image">
                <img
                  className="image_config"
                  src={require("../../assets/carousel_img.png")}
                  alt="imagem deu erro"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div className="main_image">
                <img
                  className="image_config"
                  src={require("../../assets/monte_carlo.png")}
                  alt="imagem deu erro"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="infobar">
        <div className="pay1">
          <img src={cellphone} width="31" height="45" />
          <h4>Pagamento cômodo e seguro</h4>
        </div>
        <div className="pay2">
          <img src={card} width="41" height="25" />
          <div className="pay2_container">
            <h4>Pague parcelado</h4>
            <a href="">Ver mais</a>
          </div>
        </div>
        <div className="pay3">
          <img src={money} width="54" height="54" />
          <div className="pay3_container">
            <h4>À vista no boleto bancário</h4>
            <a href="">Ver mais</a>
          </div>
        </div>
        <div className="pay4">
          <img src={screen} width="45" height="38" />
          <div className="pay4_container">
            <h4>Mais meios de pagamento</h4>
            <a href="">Ver todos</a>
          </div>
        </div>
      </div>
      <div className="produtos">
        <h1>Principais Produtos</h1>
        <a href="">Ver mais</a>
      </div>
      <div className="destaque">
        {products.map((product) => {
          return (
            <div className="card_container">
              <img
                className="icon"
                src={require("../../assets/img_product1.png")}
                alt="imagem deu erro"
              />
              <div className="icon_circle">
                <img
                  src={require("../../assets/icon_car.png")}
                  alt="imagem deu erro"
                />
              </div>

              <div className="card_text">
                <h1>{product.price}</h1>
                <h2>{product.parcel}</h2>
                <h3>{product.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="banner"></div>
      <div className="category">
        <h1>Compre por categoria</h1>
        <div className="category_all">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, HashNavigation]}
            className="mySwiper"
          >
            <SwiperSlide data-hash="">
              <div>
                <img
                  src={require("../../assets/Anéis.png")}
                  alt="imagem deu erro"
                />
                <p>Anéis</p>
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div>
                <img
                  src={require("../../assets/Brincos.png")}
                  alt="imagem deu erro"
                />
                <p>Brincos</p>
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div>
                <img
                  src={require("../../assets/Colares.png")}
                  alt="imagem deu erro"
                />
                <p>Colares</p>
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div>
                <img
                  src={require("../../assets/Pingentes.png")}
                  alt="imagem deu erro"
                />
                <p>Pingentes</p>
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div>
                <img
                  src={require("../../assets/Pulseiras.png")}
                  alt="imagem deu erro"
                />
                <p>Pulseiras</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="brand">
        <p>Compre por marcas</p>
        <div className="brand_carousel">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, HashNavigation]}
            className="mySwiper"
          >
            <SwiperSlide data-hash="">
              <div className="brand_image">
                <img
                  className="image_config"
                  src={require("../../assets/vivara.png")}
                  alt="imagem deu erro"
                />
                <img
                  className="image_config"
                  src={require("../../assets/logo_bruner.png")}
                  alt="imagem deu erro"
                />
                <img
                  className="image_config"
                  src={require("../../assets/logo_antonio_bernardo.png")}
                  alt="imagem deu erro"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div className="brand_image">
                <img
                  className="image_config"
                  src={require("../../assets/hstern.png")}
                  alt="imagem deu erro"
                />
                <img
                  className="image_config"
                  src={require("../../assets/carla_amorim.png")}
                  alt="imagem deu erro"
                />
                <img
                  className="image_config"
                  src={require("../../assets/monte_carlo.png")}
                  alt="imagem deu erro"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide data-hash="">
              <div className="brand_image">
                <img
                  className="image_config"
                  src={require("../../assets/tiffany.png")}
                  alt="imagem deu erro"
                />
                <img
                  className="image_config"
                  src={require("../../assets/jack.png")}
                  alt="imagem deu erro"
                />
                <img
                  className="image_config"
                  src={require("../../assets/animale.png")}
                  alt="imagem deu erro"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="whats_btn"></div>
    </div>
  );
};
export default Body;
