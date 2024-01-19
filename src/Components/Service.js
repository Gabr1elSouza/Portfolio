import React from "react";

import Style from "./Service.module.css";

import CardAnimation from "../Components/CardAnimation";

function Service() {
  return (
    <div>
      <div className={Style.service} id="services">
        <h2>Our Services</h2>
        {/*<div className={Style.title}>
          
        </div>
        <div className={Style.box}>
          <div className={Style.card}>
            <i class="fa-solid fa-bars"></i>
            <h5>Front-end</h5>
            <div class={Style.pra}>
              <p>
                Every website should be build with two primary goals: Firstly,
                ir needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>

              <p className={Style.button_card}>
                <a className={Style.button} href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className={Style.card}>
            <i class="fa-solid fa-bars"></i>
            <h5>Back-End</h5>
            <div class={Style.pra}>
              <p>
                Every website should be build with two primary goals: Firstly,
                ir needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>

              <p className={Style.button_card}>
                <a className={Style.button} href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className={Style.card}>
            <i class="fa-solid fa-bars"></i>
            <h5>DBA</h5>
            <div class={Style.pra}>
              <p>
                Every website should be build with two primary goals: Firstly,
                ir needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>

              <p className={Style.button_card}>
                <a className={Style.button} href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>
  </div>*/}
        <CardAnimation />
      </div>
    </div>
  );
}

export default Service;
