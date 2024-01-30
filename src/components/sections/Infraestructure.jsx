function Infraestructure() {
    return (
        <>
            <div className="container-fluid-infra">
                <h1 className="h-titles-values">Infraestructura</h1>
                <hr className="border border-primary border-8"/>
                <hr className="border border-primary border-9"/>             
                <div className="row-infraestructure">
                    <div className="col-img-infra">
                        <img src="images/services/infraestructura.png" width="350" alt="Servicio de Infraestructura"/>
                    </div>
                    <div className="col">
                        <ul className="list-infraestructure-services">
                            <li>Cableado estructurado.</li>
                            <li>Soluciones en Fibra Óptica.</li>
                            <li>Automatización e integración de sistemas.</li>
                            <li>Domótica.</li>
                            <li>Soluciones de Sistemas de seguridad electrónica Sistemas de CCTV y Alarmas.</li>
                            <li>Sistemas de Control de acceso para personas y vehículos <br />(UHF, RFID, entre otros)</li>
                            <li>Sistemas aires acondicionados de precisión.</li>
                            <li>Sistemas de detección de incendios en cumplimiento de la normatividad.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Infraestructure;