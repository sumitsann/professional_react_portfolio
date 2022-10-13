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
      <p>
        I am a Software Developer with knowledge on production of web and mobile
        applications. I have good understanding and technical expertise in
        Computer Science fundamentals, Javascript, ReactJS, Redux, NodeJS,
        MongoDB, CSS, HTML and other technologies. I graduated from Tarleton
        State University in Bachelor in Computer Information Systems in May
        2021.
      </p>
    </section>
  );
}

export default About;
