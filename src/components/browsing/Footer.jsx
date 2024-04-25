import {Link} from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className="content-foo">
                    <h4>Aspectos Legales</h4>
                    <Link className="social-networks" target='_blank' to="/dataSecurity">Políticas de Seguridad de la Informacion y Ciberseguridad</Link>
                    <Link className="social-networks" target='_blank' to="/privacy">Políticas de Protección de Datos Personales</Link>
                    <Link className="social-networks" target='_blank' to="/legalAspects">Términos y Condiciones de uso</Link>
                </div>
                <div className="content-foo">
                    <h4>Contáctanos</h4>
                    <Link className="social-networks" target='_blank' to="https://wa.me/573160168036"><img className="icons-social-networks" src="images/icons/whatsapp.png" width="50px" alt="What's App Soluproint"/>+57 3160168036</Link>
                    <Link className="social-networks-hidden" target='_blank' to="https://wa.me/573160168036"><img className="icons-social-networks" src="images/icons/whatsapp.png" width="50px" alt="What's App Soluproint"/></Link>
                </div>
                <div className="content-foo">
                    <h4>Escríbenos</h4>
                    <Link className="social-networks" target='_blank' to="/contactForm"><img className="icons-social-networks" src="images/icons/mail.png" width="50px" alt="E-mail Soluproint"/>soluproint@soluproint.com</Link>
                    <Link className="social-networks-hidden" target='_blank' to="/contactForm"><img className="icons-social-networks" src="images/icons/mail.png" width="50px" alt="E-mail Soluproint"/></Link>
                </div>
                <div className="content-foo">
                    <h4>Nuestras Redes</h4>
                    <div className="content-foo-social">
                        <Link className="social-networks" target='_blank' to="https://www.instagram.com/soluproint/"><img className="icons-social-networks2" src="images/icons/instagram.png" alt="Instagram Soluproint"/>@soluproint</Link>
                        <Link className="social-networks-hidden" target='_blank' to="https://www.instagram.com/soluproint/"><img className="icons-social-networks2" src="images/icons/instagram.png" alt="Instagram Soluproint"/></Link>
                        <Link className="social-networks" target='_blank' to="https://www.facebook.com/Soluproint/"><img className="icons-social-networks2" src="images/icons/facebook.png" alt="Facebook Soluproint"/>@Soluproint S.A.S</Link>
                        <Link className="social-networks-hidden" target='_blank' to="https://www.facebook.com/Soluproint/"><img className="icons-social-networks2" src="images/icons/facebook.png" alt="Facebook Soluproint"/></Link>
                        <Link className="social-networks" target='_blank' to="https://www.linkedin.com/in/seguridadalamano/"><img className="icons-social-networks2" src="images/icons/linkedin.png" alt="LinkedIn Soluproint"/>@Soluproint S.A.S</Link>
                        <Link className="social-networks-hidden" target='_blank' to="https://www.linkedin.com/in/seguridadalamano/"><img className="icons-social-networks2" src="images/icons/linkedin.png" alt="LinkedIn Soluproint"/></Link>
                    </div>
                </div> 
            </div>
            <div className="wave" style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#09294F"}}></path>
                </svg>
            </div>
            <div className="wave2" style={{height: "150px", marginTop: "-160px", overflow: "hidden"}} >
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