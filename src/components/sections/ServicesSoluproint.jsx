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
                            <img src="images/services/servicio-infraestructura.png" width="200" alt="Icono-infraestructura" />
                        </div>
                        <div className="col-icons">
                            <img src="images/services/servicio-innovacion.png" width="200" alt="Icono-innovación" />
                        </div>
                        <div className="col-icons">
                            <img src="images/services/servicio-redes-electricas.png" width="200" alt="Icono-redes-eléctricas" />
                        </div>
                        <div className="col-icons">
                            <img src="images/services/servicio-aires-acondicionados.png" width="200" alt="Icono-aires-acondicionados" />
                        </div>
                    </div>
                    <ul className="row-titles-services">
                        <li className="service-item">
                            <a className="services-link" >Infraestructura</a>
                        </li>
                        <li className="service-item">
                            <a className="services-link" >Innovación</a>
                        </li>
                        <li className="service-item">
                            <a className="services-link" >Redes<br />Eléctricas</a> 
                        </li>
                        <li className="service-item">
                            <a className="services-link" >Aires<br />Acondicionados</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ServicesSoluproint;