import './bootstrap.css'
function NavBar() {
  return (
    <>
      <nav class=" navbar navbar-expand-lg bg-nav-sp">
        <div class="container-fluid">
          <a class="" href="#">
            <div>
              <nav>
              <a class="logo" href='/'><img src="images/logo-web.png" alt="Logotipo de la empresa" width="230"/></a>
              </nav>
            </div>
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link disabled" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ciberseguridad
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <button class="btn btn-outline-success" type="submit">
                Contáctanos
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
