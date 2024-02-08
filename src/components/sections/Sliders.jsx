import {Link} from 'react-router-dom';

function Sliders() {
    return (
        <>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slider1">
                            <div className="text-wrap">
                                <h2 className="title-slider-home">Asesorías y Consultorías</h2>
                                <div>
                                    <hr className="border-slider1-home"/>
                                </div>
                                <p className="p-slider-home">Optimización de recursos, eficiencia en los resultados</p>
                                <br />
                                <Link className="btn btn-slider" to="/cybersecurity" type="button">CONOCE MÁS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slider2">
                            <div className="text-wrap">
                                <h2 className="title-slider-home">Integramos Tecnologías</h2>
                                <div>
                                    <hr className="border-slider1-home"/>
                                </div>
                                <p className="p-slider-home">Soluciones Integrales e Innovación de acuerdo <br />a las tendencias tecnólogicas</p>
                                <Link className="btn btn-slider" to="/servicePortfolio" type="button">CONOCE MÁS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slider3">
                            <div className="text-wrap">
                                <h2 className="title-slider-home3">Fidelización y Satisfacción de <br />Nuestros Clientes</h2>
                                <div>
                                    <hr className="border-slider1-home"/>
                                </div>
                                <p className="p-slider-home">Nuestra más grande prioridad</p>
                                <br />
                                <Link className="btn btn-slider" to="/aboutUs" type="button">CONOCE MÁS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Sliders;