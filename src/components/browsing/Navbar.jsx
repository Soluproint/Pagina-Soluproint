import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className=" navbar navbar-expand-lg bg-nav-sp">
        <div className="container-navbar">
          <Link className="logo" to='/'>
              <img src="images/icons/logo-web.png" alt="Logotipo de la empresa" width="230"/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/aboutUs'>Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/servicePortfolio'>Servicios</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/cybersecurity'>Ciberseguridad</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/blog'>Blog</Link> 
              </li>
            </ul>
            <Link className="btn btn-outline-success" to="/contact" role="button">Contáctanos</Link>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
