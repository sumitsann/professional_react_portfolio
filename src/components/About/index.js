import React from "react";
import coverImage from "../../assets/img/me.png";

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="cover_pic"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
