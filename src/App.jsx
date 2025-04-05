import Header from "./components/header/Header.component";
import Home from "./pages/home/Home.page";
import About from "./pages/about/About.page";
import Skills from "./pages/skills/Skills.page";
import Services from "./pages/services/Services.page";
import Contact from "./pages/contact/Contact.page";
import Footer from "./components/footer/Footer.component";
import Scrollup from "./components/scrollup/Scrollup.component";

function App() {
  return (
    <>
      <Header />
        <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        </main>
        <Footer />
        <Scrollup />
    </>
  );
}

export default App;
