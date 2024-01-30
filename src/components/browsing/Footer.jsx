function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className="content-foo">
                    <h4>Contáctanos</h4>
                    <p>+57 3128084040 </p>
                </div>
                <div className="content-foo">
                    <h4>Escríbenos</h4>
                    <p>info@seguridadalamano.com</p>
                </div>
                <div className="content-foo">
                    <h4>Nuestras Redes</h4>
                    <p>@seguridad_a_la_mano</p>
                    <p>@seguridadalamano</p>
                    <p>@seguridadalamano</p>
                </div>
            </div>
            <div className="wave" style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#09294F"}}></path>
                </svg>
            </div>
            <div className="wave" style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill:"#dad9d9"}}></path>
                </svg>
            </div>
            <div className="content-foo2">
                <p>Nuestras líneas de atención estan <br />disponibles para ti.</p>
                <p>Hablemos sobre tu proyecto y creemos <br />soluciones juntos.</p>
                <p>Conéctate con nosotros en las redes <br />sociales y mantente actualizado.</p>
            </div>
            <h3 className="footer-copyright">&copy; Soluciones y Proyectos Integrales | Soluproint S.A.S</h3>
        </>
    );
}

export default Footer;