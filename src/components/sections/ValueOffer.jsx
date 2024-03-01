import {Link} from 'react-router-dom'

function ValueOffer() {
    return (
        <>
            <div className="container-fluid-offer">
                <div className="row-value-offer">
                    <div className="col-offer">
                        <img className="img-fluid-offer" src="images/about-us/oferta.png" alt="Oferta de valor-ciberseguridad" />
                    </div>
                    <div className="col-text-offer">
                        <h2 className="h-offer">Revolucionamos el mundo a través de la seguridad y comodidad</h2><br />
                        <p className="p-offer">Ofrecemos soluciones con innovación, calidad, estrategia y construcción de ofertas bajo el análisis de la rentabilidad de cada negocio forjando la optimización de recursos medibles y los cuales están representados en las inversiones, eficiencia de los resultados y la satisfacción de cada cliente.</p>
                        <Link className="btn btn-offer" to="/aboutUs" role="button">Nosotros</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ValueOffer;