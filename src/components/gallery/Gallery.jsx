import React from "react";
import galleryCss from "./gallery.module.css";

const Images = ({ title, url }) => <img src={url} alt={title} loading="lazy" />;

function Gallery() {
  const imagesData = [
    {
      id: 1,
      title: "First image",
      url: "/Control/assets/img/mts1_8_11zon.webp",
    },
    {
      id: 2,
      title: "First image",
      url: "/Control/assets/img/mts2_7_11zon.webp",
    },
    {
      id: 3,
      title: "First image",
      url: "/Control/assets/img/mts3_6_11zon.webp",
    },
    {
      id: 4,
      title: "First image",
      url: "/Control/assets/img/mts4_5_11zon.webp",
    },
    {
      id: 5,
      title: "First image",
      url: "/Control/assets/img/mts5_4_11zon.webp",
    },
    // Puedes agregar más datos de imágenes aquí
  ];
  return (
    <>
      <article className={galleryCss["gallery"]}>
        <div className={galleryCss["gallery-header"]}>
          <h3>Gallery of the University</h3>
        </div>
        <div className={galleryCss["moments"]}>
          {/* Creación automática de imágenes para mostrar */}
          {imagesData.map((image) => (
            <Images key={image.id} {...image} />
          ))}
        </div>
      </article>
    </>
  );
}

export default Gallery;
