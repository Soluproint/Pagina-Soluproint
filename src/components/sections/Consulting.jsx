import {Link} from 'react-router-dom'

function Consulting() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Consultorias en Seguridad y<br></br>Ciberseguridad de la información</h1>
                <div className="row-consult">
                    <div className="col-img-consult">
                        <img src="images/services/ciberseguridad.png" width="450" alt="Seguridad de la Información" />
                    </div>
                    <div className="col">
                        <p className="p-consult">Consultoría e Implementación de procesos en SGSI - Sistema De Gestión En Seguridad De La Información y Ciberseguridad, Bajo Estándares de la norma ISO27001-2022 y basados en la Triada Confidencialidad, Disponibilidad e Integridad.</p><br></br>
                        <Link className="btn btn-outline-offer" to="/cybersecurity" role="button">Diagnóstico</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consulting;