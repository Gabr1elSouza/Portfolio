import Style from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={Style.hero} id="home">
        <nav>
          <h2 className={Style.logo}>
            Gabri<span>el</span>
          </h2>
          <ul>
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
          <a href="#" className={Style.btn}>
            Follow me
          </a>
        </nav>
        <div className={Style.content}>
          <h4>Helloo, my name is</h4>
          <h1>
            Gabriel <span>Souza</span>
          </h1>
          <h3>Full-Stack Develope | Web Developer </h3>
          <div className={Style.newslatter}>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
              <input
                className={Style.btn}
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
