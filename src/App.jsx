import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import Home from "./pages/home/Home.page";
import About from "./pages/about/About.page";
import Skills from "./pages/skills/Skills.page";
import Services from "./pages/services/Services.page";
import Contact from "./pages/contact/Contact.page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
