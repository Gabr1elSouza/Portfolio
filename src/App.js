import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyStack from "./Components/MyStack";
import Service from "./Components/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Service />
      <Contact />
      <MyStack />
      <Footer />
    </div>
  );
}

export default App;
