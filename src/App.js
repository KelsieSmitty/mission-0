import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import HeroImage from "./components/hero";
import Cards from "./components/cards";
import Carousel from "./components/carousel";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <Cards />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
