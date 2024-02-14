import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className="content-foo">
                    <h4>Contáctanos</h4>
                    <Link className="social-networks" target='_blank' to="https://wa.me/573160168036"><img src="images/icons/whatsapp.png" width="50px" alt="What's App Soluproint"/>+57 3160168036</Link>
                </div>
                <div className="content-foo">
                    <h4>Escríbenos</h4>
                    <Link className="social-networks" target='_blank' to="mailto:manulopezv17@gmail.com"><img src="images/icons/mail.png" width="50px" alt="E-mail Soluproint"/>soluproint@soluproint.com</Link>
                    <a href="mailto:manulopezv17@gmail.com?subject=Prueba&body=Mensaje%20de%20prueba">Enviar correo</a>
                </div>
                <div className="content-foo">
                    <h4>Nuestras Redes</h4>
                    <Link className="social-networks" target='_blank' to="https://www.instagram.com/soluproint/"><img src="images/icons/instagram.png" width="50px" alt="Instagram Soluproint"/>@soluproint</Link>
                    <Link className="social-networks" target='_blank' to="https://www.facebook.com/Soluproint/"><img src="images/icons/facebook.png" width="50px" alt="Facebook Soluproint"/>@Soluproint S.A.S</Link>
                    <Link className="social-networks" target='_blank' to="https://www.linkedin.com/in/seguridadalamano/"><img src="images/icons/linkedin.png" width="50px" alt="LinkedIn Soluproint"/>@Soluproint S.A.S</Link>
                </div>
            </div>
            <div className="wave" style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#09294F"}}></path>
                </svg>
            </div>
            <div className="wave" style={{height: "150px", marginTop: "-160px", overflow: "hidden"}} >
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