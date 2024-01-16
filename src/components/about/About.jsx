import React from "react";
import aboutCss from "./about.module.css";
function About() {
  return (
    <>
      <h3 className={aboutCss["about-title"]}>About Us</h3>
      <p className={aboutCss["about-parrafo"]}>
        At tecnológico de México, Campus Orizaba, we beliee taht the education,
        goals and diclipline of our students are fundamental elements.
      </p>
    </>
  );
}

export default About;
