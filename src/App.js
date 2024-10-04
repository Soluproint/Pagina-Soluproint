import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importamos los estilos de las páginas
import "./styles.css";
import "./components/sections/AirConditioners/air-styles.css";
import "./components/sections/PostBlog/post-styles.css";

//Importamos las vistas de las páginas
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ServicePortfolio from "./pages/ServicePortfolio";
import Cybersecurity from "./pages/Cybersecurity";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DataSecurity from "./pages/DataSecurity";

//Importamos los componentes de las páginas
import Navbar from "./components/browsing/Navbar";
import Footer from "./components/browsing/Footer";
import ServicesForm from "./components/sections/ServicesForm";
import AirConditioners from "./components/sections/AirConditioners/AirConditioners";
import SGSI from "./components/sections/SGSI";
import Infraestructure from "./components/sections/Infraestructure";
import ContactForm from "./components/sections/ContactForm";
import PrivacyPolicy from "./components/sections/PrivacyPolicy";

// const express = require("express");
// const app = express();

//Componente donde se va a construir toda la aplicación
function App() {
  // // Configurar la cabecera Content Security Policy
  // app.use((req, res, next) => {
  //   res.setHeader(
  //     "Content-Security-Policy",
  //     "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; object-src 'none'; media-src 'none'; frame-src 'none'; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; manifest-src 'self'; block-all-mixed-content; upgrade-insecure-requests; require-sri-for script style; disown-opener; reflected-xss block; referrer no-referrer; sandbox allow-same-origin allow-scripts; report-to csp-endpoint"
  //   );
  //   next();
  // });

  // // Iniciar el servidor
  // const PORT = process.env.PORT || 3000;
  // app.listen(PORT, () => {
  //   console.log(`Servidor escuchando en el puerto ${PORT}`);
  // });
  return (
    <>
      <div className="App">
        <Router>
          <header className="header" id="heading">
            <Navbar />
          </header>
          <main id="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/servicePortfolio" element={<ServicePortfolio />} />
              <Route path="/cybersecurity" element={<Cybersecurity />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/servicesForm" element={<ServicesForm />} />
              <Route path="/serviceConsulting" element={<SGSI />} />
              <Route path="/serviceAir" element={<AirConditioners />} />
              <Route
                path="/serviceInfraestructure"
                element={<Infraestructure />}
              />
              <Route path="/contactForm" element={<ContactForm />} />
              <Route path="/dataSecurity" element={<DataSecurity />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <footer id="end">
            <Footer />
          </footer>
        </Router>
      </div>
    </>
  );
}

export default App;
