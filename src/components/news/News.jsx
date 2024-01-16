import React from "react";
import news from "./news.module.css";

/* Funcion para la creacion de las tarjetas de en uso del DOM */
const Card = ({ image, title, text }) => (
  <div className={news["card"]}>
    <div className={news["card-header"]}>
      <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

/* Funcion principal de las noticias */
function News() {
  const cardData = [
    {
      id: 1,
      image: "/Control/assets/img/news1_3_11zon.webp",
      title: "New One",
      text: "Este es el párrafo de la primera noticia",
    },
    {
      id: 2,
      image: "/Control/assets/img/news2_2_11zon.webp",
      title: "New Two",
      text: "Este es el segundo parrafo de la segunda noticia",
    },
    {
      id: 3,
      image: "/Control/assets/img/news3_1_11zon.webp",
      title: "News Three",
      text: "Este es el tercer parrafo de la tercera noticia",
    },
    {
      id: 4,
      image: "/Control/assets/img/news1_3_11zon.webp",
      title: "New Four",
      text: "Este es el párrafo de la cuarta noticia",
    },
    {
      id: 5,
      image: "/Control/assets/img/news2_2_11zon.webp",
      title: "New Five",
      text: "Este es el parrafo de la quinta noticia",
    },
    {
      id: 6,
      image: "/Control/assets/img/news3_1_11zon.webp",
      title: "News Six",
      text: "Este es el parrafo de la sexta noticia",
    },

    // Puedes agregar más datos de tarjetas aquí
  ];

  return (
    <>
      <article className={news["news"]}>
        <div className={news["news-header"]}>
          <h3>News</h3>
          <div className={news["filter"]}>
            <span>Filter News</span>
            <i className="bx bx-filter"></i>
          </div>
        </div>
        <div className={news["news-body"]}>
          {/* Creacion automatica de 6 cards para mostrar las diferentes noticias que se presentan */}
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </article>
    </>
  );
}

export default News;
