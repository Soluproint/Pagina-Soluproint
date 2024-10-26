import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className=" navbar bg-nav-sp">
        <div className="container-navbar">
          <Link className="logo" to="/">
            <img
              className="img-logo"
              src="images/icons/logo-web.png"
              alt="Logotipo de la empresa"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button className="nav-toggle" onClick={() => toggleMenu()}>
              {!menuOpen && <FaBars className="m-2 h-6 w-5" />}
              {menuOpen && <FaTimes className="m-2 h-6 w-5" />}
            </button>
            <ul className="navbar-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutUs">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicePortfolio">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cybersecurity">
                  Seguridad/Ciberseguridad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success"
                  to="/contact"
                  role="button"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
            <ul
              className={
                menuOpen ? "navbar-menu2 navbar-menu_visible" : "navbar-menu2"
              }
            >
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success-2"
                  to="/"
                  role="button"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success-2"
                  to="/aboutUs"
                  role="button"
                >
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success-2"
                  to="/servicePortfolio"
                  role="button"
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success-2"
                  to="/cybersecurity"
                  role="button"
                >
                  Seguridad/Ciberseguridad
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success-2"
                  to="/blog"
                  role="button"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success-2"
                  to="/contact"
                  role="button"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
