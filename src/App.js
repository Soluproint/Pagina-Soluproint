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
