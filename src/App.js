import { BrowserRouter as Router, Routes, Route, useLinkClickHandler} from 'react-router-dom';

//Importamos los estilos de las páginas
import './styles.css';
import './components/sections/AirConditioners/air-styles.css'
import './components/sections/PostBlog/post-styles.css'

//Importamos las vistas de las páginas
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ServicePortfolio from './pages/ServicePortfolio';
import Cybersecurity from './pages/Cybersecurity';
import Blog from './pages/Blog';
import BlogStrapi from './pages/BlogStrapi';
import Contact from './pages/Contact';

//Importamos los componentes de las páginas
import Navbar from './components/browsing/Navbar'
import Footer from './components/browsing/Footer'
import ServicesForm from './components/sections/ServicesForm';
import AirConditioners from './components/sections/AirConditioners/AirConditioners';
import SGSI from './components/sections/SGSI';
import Infraestructure from './components/sections/Infraestructure';
import ContactForm from './components/sections/ContactForm';
import PostBlog from './components/sections/PostBlog/PostBlog';

//Componente donde se va a construir toda la aplicación
function App() {
  return (
    <>
    <div className="App">
      <Router>
        <header className="header" id="heading">
          <Navbar/>
        </header>
        <main id="main">
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/aboutUs' element={<AboutUs/>}/>
              <Route path='/servicePortfolio' element={<ServicePortfolio/>}/>
              <Route path='/cybersecurity' element={<Cybersecurity/>}/>
              <Route path='/blog' element={<BlogStrapi/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/servicesForm' element={<ServicesForm/>}/>
              <Route path='/serviceConsulting' element={<SGSI/>}/>
              <Route path='/serviceAir' element={<AirConditioners/>}/>
              <Route path='/serviceInfraestructure' element={<Infraestructure/>}/>
              <Route path='/contactForm' element={<ContactForm/>}/>
            </Routes>
        </main>
        <footer id="end">
          <Footer/>
        </footer>
      </Router>
    </div>
    </>
  );
}

export default App;
