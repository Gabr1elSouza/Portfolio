import Navbar from "../components/navbar";

import style from "../style.module.css";

function index() {
  return (
    <>
      <div className={style.hero} id="home">
        <nav className={style.nav}>
          <h2 className={style.logo}>
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
          <a href="#" className={style.btn}>
            Follow me
          </a>
        </nav>
        <div className={style.content}>
          <h4>Helloo, my name is</h4>
          <h1>
            Gabriel <span>Souza</span>
          </h1>
          <h3>I'm a Web Developer.</h3>
          <div className={style.newslatter}>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
              <input type="submit" name="submit" value="Let's Start" />
            </form>
          </div>
        </div>
      </div>

      {/* About section start */}
      <section className={style.about} id="about">
        <div className={style.main}>
          <img src="/img/Foto01.jpg" alt="foto-principal" />
          <div className={style.about_text}>
            <h2>About Me</h2>
            <h5>
              Developer <span>& Designer</span>
            </h5>
            <p>
              I am a front-end web developer. I can provide clean code and pixel
              perfect design. I also make the website more & more interactive
              with web animations. A responsive design makes your website
              accessible to all users, regardless of their device.
            </p>
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section>

      {/* Service Start */}
      <div className={style.service} id="services">
        <div className={style.title}>
          <h2>Our Services</h2>
        </div>
        <div className={style.box}>
          <div className={style.card}>
            <i className="fa-solid fa-bars"></i>
            <h5>Web Development</h5>
            <div className={style.pra}>
              <p>
                Every website should be build with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
              <p style={{ textAlign: "center" }}>
                <a className={style.button} href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className={style.card}>
            <i className="fa-regular fa-user"></i>
            <h5>Backend</h5>
            <div className={style.pra}>
              <p>
                Every website should be build with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
              <p style={{ textAlign: "center" }}>
                <a className={style.button} href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className={style.card}>
            <i className="fa-regular fa-bell"></i>
            <h5>DBA</h5>
            <div className={style.pra}>
              <p>
                Every website should be build with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>
              <p style={{ textAlign: "center" }}>
                <a className={style.button} href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className={style.Contact_me} id="Contact">
        <p>Let Me Get You a Beautiful Website.</p>
        <a className={style.Button_two} href="#">
          Hire Me
        </a>
      </div>

      {/* Footer Start */}
      <footer className={style.footer}>
        <p>Gabriel Souza</p>
        <p>
          For more HTML and CSS - Please click on the link below to follow my
          GitHub
        </p>
        <div className={style.Social}>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/Gabr1elSouza">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
        <p className={style.end}>
          CopyRight <span>Gabriel Souza</span> &copy;2023
        </p>
      </footer>
    </>
  );
}

export default index;
