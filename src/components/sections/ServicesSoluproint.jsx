import {Link} from 'react-router-dom';

function ServicesSoluproint() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Servicios</h1>
                <hr className="border border-primary border-6"/>
                <hr className="border border-primary border-7"/>                
                <div className="row-container">
                    <div className="row-services-portfolio">
                        <div className="col-icons">
                            <a href='#service-infraestructure'> <img src="images/services/servicio-infraestructura.png" width="200" alt="Icono-infraestructura"/> </a>
                        </div>
                        <div className="col-icons">
                            <a href='#service-innovation'> <img src="images/services/servicio-innovacion.png" width="200" alt="Icono-innovación"/> </a>
                        </div>
                        <div className="col-icons">
                            <a href='#service-networks'> <img src="images/services/servicio-redes-electricas.png" width="200" alt="Icono-redes-eléctricas"/> </a>
                        </div>
                        <div className="col-icons">
                            <a href='#service-air'> <img src="images/services/servicio-aires-acondicionados.png" width="200" alt="Icono-aires-acondicionados"/> </a>
                        </div>
                    </div>
                    <ul className="row-titles-services">
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
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ServicesSoluproint;