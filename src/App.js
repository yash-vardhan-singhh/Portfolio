import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Footer from "./Components/Footer/footer";
import Contact from "./Components/Contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
