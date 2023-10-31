function navbar() {
  return (
    <nav>
      <h2 className="logo">
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
      <a href="#" className="btn">
        Follow me
      </a>
    </nav>
  );
}

export default navbar;
