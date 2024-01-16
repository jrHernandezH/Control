//Vista que albergara toda la informacion que se mostrara de primera a los estudiantes
import React from "react";
import { Link } from "react-router-dom";

//Estilos e iconos que se ocuparan dentro de esta landyn
import landynCss from "./Landyn.module.css";
import "boxicons/css/boxicons.min.css";
import About from "../../components/about/About";
import News from "../../components/news/News";
import Gallery from "../../components/gallery/Gallery";

function Landyn() {
  return (
    <>
      <header className={landynCss["header-landyn"]}>
        <div className={landynCss["container-nav"]}>
          <div className={landynCss["title"]}>
            <h1>Control</h1>
          </div>
          <nav className={landynCss["navbar"]}>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>News</Link>
            <Link>Carrer's</Link>
            <Link>Apps</Link>
            <Link>
              Login <i className="bx bx-log-in"></i>
            </Link>
          </nav>
        </div>
        <div className={landynCss["container-img-landyn"]}>
          <div className={landynCss["mascara-img-landyn"]}></div>
          <h2>Instituto Tecnologico de Mexico Campus Orizaba</h2>
        </div>
        <div className={landynCss["container-about"]} id="About">
          <div className={landynCss["about-img"]}>
            <img src="/Control/assets/img/img6_10_11zon.webp" alt="about-us" />
          </div>
          <div className={landynCss["about-us"]}>
            {/* aqui ira el componente que se estara moviendo about-carrers-apps */}
            <About />
            <div className={landynCss["arrows"]}>
              <div className={landynCss["arrow"]}>
                <i className="bx bx-left-arrow-alt"></i>
                <span>previous</span>
              </div>
              <div className={landynCss["arrow"]}>
                <span>next</span>
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={landynCss["main"]}>
        {/*Aqui iran las noticias y diferentes componentes que esten en constante cambio */}
        <News />
        <Gallery />
      </main>
      <footer className={landynCss["footer"]}>
        <div className={landynCss["container-footer"]}>
          <div className={landynCss["links-documentation"]}>
            <div className={landynCss["header-links"]}>
              <h4>Control</h4>
            </div>
            <div className={landynCss["body-links"]}>
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/News">News</Link>
              <Link to="/Careers">Carrer's</Link>
              <Link to="/Apps">Apps</Link>
            </div>
            <div className={landynCss["leyend"]}>
              <span>©Control servicios reservados</span>
            </div>
          </div>
          <div className={landynCss["social-medias"]}>
            <div className={landynCss["header-social"]}>
              <h4>Social</h4>
            </div>
            <div className={landynCss["body-social"]}>
              <a href="/prueba">
                <i className="bx bxl-facebook-circle">
                  <span>Facebook</span>
                </i>
              </a>
              <a href="/prueba">
                <i className="bx bxl-instagram-alt">
                  <span>Instagram</span>
                </i>
              </a>
              <a href="/prueba">
                <i className="bx bxl-linkedin-square">
                  <span>Linkedin</span>
                </i>
              </a>
            </div>
          </div>
          <div className={landynCss["contact"]}>
            <div className={landynCss["header-contact"]}>
              <h4>Contact with Email</h4>
            </div>
            <div className={landynCss["contact-body"]}>
              <span>Email</span>
              <i className="bx bxs-send"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landyn;
