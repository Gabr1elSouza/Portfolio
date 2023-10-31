import Navbar from "../components/navbar";

function index() {
  return (
    <div className="hero" id="home">
      <Navbar />
      <div className="content">
        <h4>Helloo, my name is</h4>
        <h1>
          Gabriel <span>Souza</span>
        </h1>
        <h3>I'm a Web Developer.</h3>
        <div className="newslatter">
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
  );
}

export default index;
