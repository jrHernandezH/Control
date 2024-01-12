//Vista que albergara toda la informacion que se mostrara de primera a los estudiantes
import React from "react";
import { Link } from "react-router-dom";

//Estilos e iconos que se ocuparan dentro de esta landyn
import landynCss from "./Landyn.module.css";
import "boxicons/css/boxicons.min.css";

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
        <div className={landynCss["container-about"]}>
          <div className={landynCss["about-img"]}>
            <img src="/Control/assets/img/img6_10_11zon.webp" alt="about-us" />
          </div>
          <div className={landynCss["about-us"]}>
            {/* aqui ira el componente que se estara moviendo about-carrers-apps */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Landyn;
