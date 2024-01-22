import "./Header.css";
import { useEffect } from "react";

const Header = () => {
  const hamburguer = document.querySelector(`.hamburguer`);
  const nav = document.querySelector(".nav");

  const handleClick = () => {
    const nav = document.querySelector(`.nav`);
    nav.classList.toggle("active");
  };

  useEffect(() => {
    const hamburguer = document.querySelector(`.hamburguer`);
    hamburguer.addEventListener("click", handleClick);

    return () => {
      hamburguer.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <div className="hero" id="home">
        <nav className="nav">
          <h2 className="logo">
            Gabri<span>el</span>
          </h2>
          <button className="hamburguer"></button>
          <ul className="nav-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Contact">Contact us</a>
            </li>
          </ul>
          <a href="#" className="btn">
            Follow me
          </a>
        </nav>
        <div className="content">
          <h4>Helloo, my name is</h4>
          <h1>
            Gabriel <span>Souza</span>
          </h1>
          <h3>Full-Stack Develope | Web Developer </h3>
          <div className="newslatter">
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
              <input
                className="btn2"
                type="submit"
                name="submit"
                value="Let's Start"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
