import Style from "./About.module.css";

function About() {
  return (
    <div>
      <section className={Style.about} id="about">
        <div className={Style.main}>
          <img src="/Img/Foto01.jpg" className={Style.Image} alt="Gabriel's Souza"/>
          <div className={Style.about_text}>
            <h2>About Me</h2>
            <h5>
              Developer <span>& Designer</span>
            </h5>
            <p>
              I am a front-end web developer. I can provide clena code and pixel
              perfect design. I also make the website more & more interactive
              with web animations. I can provide clean code and pixel perfect
              design. I also make the website more & more interactive with web
              animations. A responsive design makes your website accessible to
              all users, regardless of their device.
            </p>
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
