import { Link } from "react-router-dom";

function LegalAspects() {
  return (
    <>
      <div className="container-fluid-policy">
        <h1 className="h-titles-policy">
          Políticas para el uso de la App-Web Soluproint
        </h1>
        <div className="container-politicy">
          <div className="container-content-policy">
            <h2 className="title-policy">Aspectos Legales</h2>
            <p className="p-content-policy">
              Bienvenido a Soluproint. La seguridad y la privacidad son nuestras
              principales prioridades, y queremos asegurarnos de que cada
              usuario comprenda las políticas que rigen el uso de nuestra
              plataforma. Al utilizar Soluproint, aceptas automáticamente los
              términos que rotegen tu información y aseguran el correcto
              funcionamiento de nuestra aplicación. Estas políticas abarcan
              nuestros compromisos y tus derechos en cuanto a la
              <span className="text-bold">
                {" "}
                Seguridad de la Información y Ciberseguridad
              </span>
              , la
              <span className="text-bold">
                {" "}
                Protección de Datos Personales{" "}
              </span>
              y los
              <span className="text-bold"> Términos y Condiciones de uso </span>
              <br />
              <br />A continuación, puedes acceder a cada política para
              revisarla detalladamente.
            </p>
            <div>
              <ul className="container-list-politics">
                <li className="list-politics">
                  <Link
                    className="links-politics"
                    target="_blank"
                    to="/politicaSeguridadInformacion"
                  >
                    Políticas de Seguridad de la Informacion y Ciberseguridad
                  </Link>
                </li>
                <li className="list-politics">
                  <Link
                    className="links-politics"
                    target="_blank"
                    to="/politicaDatosPersonales"
                  >
                    Políticas de Protección de Datos Personales
                  </Link>
                </li>
                <li className="list-politics">
                  <Link className="links-politics" target="_blank" to="">
                    Términos y Condiciones de uso
                  </Link>
                </li>
              </ul>
            </div>
            <p className="p-content-policy">
              Te invitamos a tomarte un momento para revisar estas políticas, ya
              que están diseñadas para proteger tanto tus datos personales como
              la integridad de la página Soluproint.
            </p>
            <br />
            <p className="p-content-policy">
              Además, en el{" "}
              <Link className="links-blog" target="_blank" to="/blog">
                Blog de Soluproint
              </Link>{" "}
              encontrarás una sección dedicada a consejos sobre seguridad de la
              información y ciberseguridad. Aquí compartimos recomendaciones y
              buenas prácticas para ayudarte a proteger tu privacidad y
              mantenerte seguro en línea, tanto en nuestra plataforma como en
              otros entornos digitales.
            </p>
            <br />
            <p className="p-content-policy">
              <span className="links-blog">
                ¡Nos encantaría que te animes a explorarlo y a hacer de la
                seguridad una prioridad en tu vida digital!
              </span>{" "}
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalAspects;
