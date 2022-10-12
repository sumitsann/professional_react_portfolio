import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            🏟️
          </span>{" "}
          Prefessional Portfolio
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
