import React from "react";

import Style from "./Footer.module.css";
function Footer() {
  return (
    <div>
      <footer>
        <p>Gabriel Souza</p>
        <p>
          For more HTML and CSS - Please click on the link below to follow my
          GitHub
        </p>
        <div className={Style.Social}>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/Gabr1elSouza">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-discord"></i>
          </a>
        </div>
        <p className={Style.end}>CopyRight By Gabriel Souza</p>
      </footer>
    </div>
  );
}

export default Footer;
