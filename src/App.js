import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Events from "./Events";

function App() {
  return (
    <div className="MainPage">
      <Navbar />
      <Home />
      <Events />
      <Gallery />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
