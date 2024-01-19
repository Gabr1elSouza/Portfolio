import React from "react";
import "./CardAnimation.css";

const CardAnimation = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <input type="radio" name="slice" id="c1" checked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Front-End</h4>
              <p>A pleasant way to showcase your business </p>
            </div>
          </div>
        </label>
        <input type="radio" name="slice" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Back-end</h4>
              <p>Doing what stays behind the scenes in the best way </p>
            </div>
          </div>
        </label>
        <input type="radio" name="slice" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>DBA</h4>
              <p>Help people all over the world!</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CardAnimation;
