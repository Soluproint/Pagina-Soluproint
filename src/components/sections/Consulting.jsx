import {Link} from 'react-router-dom'

function Consulting() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Consultorías en Ciberseguridad</h1>
                <div className="row-consult">
                    <div className="col-img-consult">
                        <img src="images/services/ciberseguridad.png" width="400" alt="Seguridad de la Información" />
                    </div>
                    <div className="col">
                        <p className="p-consult">Consultoría e Implementación de procesos en SGSI - Sistema De Gestión En Seguridad De La Información y Ciberseguridad, Bajo Estándares de la norma ISO27001-2022 y basados en la Triada Confidencialidad, Disponibilidad e Integridad.</p><br></br>
                        <a href="/servicesForm" className="btn btn-offer"role="button">Diagnóstico</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consulting;