import {Link} from 'react-router-dom';

function ServicesSoluproint() {
    return (
        <>
            <div className="container-fluid-services-sp">
                <h1 className="h-titles">Servicios</h1>
                <hr className="border border-primary border-6"/>
                <hr className="border border-primary border-7"/>                
                <div className="row-container">
                    <div className="row-services-portfolio">
                        <div className="service-infra">
                            <div className="col-icons">
                                <a href='#service-infraestructure'> <img className="img-services" src="images/services/servicio-infraestructura.png" alt="Icono-infraestructura"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-infra" href='#service-infraestructure'>Infraestructura</a>
                            </div>
                        </div>
                        <div className="service-innova">
                            <div className="col-icons">
                                <a href='#service-innovation'> <img className="img-services" src="images/services/servicio-innovacion.png" alt="Icono-innovación"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-innova" href='#service-innovation'>Innovación</a>
                            </div>
                        </div>
                        <div className="service-networks">
                            <div className="col-icons">
                                <a href='#service-networks'> <img className="img-services" src="images/services/servicio-redes-electricas.png" alt="Icono-redes-eléctricas"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-net" href='#service-networks'>Redes<br />Eléctricas</a> 
                            </div>
                        </div>
                        <div className="service-air">
                            <div className="col-icons">
                                <a href='#service-air'> <img className="img-services" src="images/services/servicio-aires-acondicionados.png" alt="Icono-aires-acondicionados"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-air" href='#service-air'>Aires<br />Acondicionados</a>  
                            </div>
                        </div>
                    </div>
                    
                    <div className="row-services-portfolio2">
                        <div className="service-infra">
                            <div className="col-icons">
                                <a href='#service-infraestructure'> <img className="img-services" src="images/services/servicio-infraestructura.png" alt="Icono-infraestructura"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-infra" href='#service-infraestructure'>Infraestructura</a>
                            </div>
                        </div>
                        <div className="service-innova">
                            <div className="col-icons">
                                <a href='#service-innovation'> <img className="img-services" src="images/services/servicio-innovacion.png" alt="Icono-innovación"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-innova" href='#service-innovation'>Innovación</a>
                            </div>
                        </div>
                    </div>
                    <div className="row-services-portfolio3">
                    <div className="service-networks">
                            <div className="col-icons">
                                <a href='#service-networks'> <img className="img-services" src="images/services/servicio-redes-electricas.png" alt="Icono-redes-eléctricas"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-net" href='#service-networks'>Redes<br />Eléctricas</a> 
                            </div>
                        </div>
                        <div className="service-air">
                            <div className="col-icons">
                                <a href='#service-air'> <img className="img-services" src="images/services/servicio-aires-acondicionados.png" alt="Icono-aires-acondicionados"/> </a>
                            </div>
                            <div className="service-item">
                                <a className="services-link-air" href='#service-air'>Aires<br />Acondicionados</a>  
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </>
    );
}

export default ServicesSoluproint;

                    /*<ul className="row-titles-services">
                        <li className="service-item">
                            <a className="services-link" href='#service-infraestructure'>Infraestructura</a>
                        </li>
                        <li className="service-item">
                            <a className="services-link" href='#service-innovation'>Innovación</a>
                        </li>
                        <li className="service-item">
                            <a className="services-link" href='#service-networks'>Redes<br />Eléctricas</a> 
                        </li>
                        <li className="service-item">
                            <a className="services-link" href='#service-air'>Aires<br />Acondicionados</a> 
                        </li>
                    </ul>*/
