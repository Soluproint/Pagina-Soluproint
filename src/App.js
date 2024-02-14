import './styles.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Importamos las vistas de las páginas
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ServicePortfolio from './pages/ServicePortfolio';
import Cybersecurity from './pages/Cybersecurity';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

//Importamos los componentes de las páginas
import Navbar from './components/browsing/Navbar'
import Footer from './components/browsing/Footer'
import ServicesForm from './components/sections/ServicesForm';
import AirConditioners from './components/sections/AirConditioners';
import SGSI from './components/sections/SGSI';
import Infraestructure from './components/sections/Infraestructure';
import ContactForm from './components/sections/ContactForm';

//Componente donde se va a construir toda la aplicación
function App() {
  return (
    <>
    <div className="App">
      <Router>
        <header id="heading">
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/servicePortfolio' element={<ServicePortfolio/>}/>
            <Route path='/cybersecurity' element={<Cybersecurity/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/servicesForm' element={<ServicesForm/>}/>
            <Route path='/serviceConsulting' element={<SGSI/>}/>
            <Route path='/serviceAir' element={<AirConditioners/>}/>
            <Route path='/serviceInfraestructure' element={<Infraestructure/>}/>
            <Route path='/contactForm' element={<ContactForm/>}/>
          </Routes>
        </header>
        <footer id="end">
          <Footer/>
        </footer>
      </Router>
    </div>
    </>
  );
}

export default App;
