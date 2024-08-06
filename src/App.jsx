import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import TechStack from "./Components/TechStack/TechStack";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;