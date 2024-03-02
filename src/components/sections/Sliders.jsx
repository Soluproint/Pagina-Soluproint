import {Link} from 'react-router-dom';

function Sliders() {
    return (
        <>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slider1">
                            <div className="text-wrap-slider">
                                <h2 className="title-slider-home">Asesorías y Consultorías</h2>
                                <div>
                                    <hr className="border-slider-home"/>
                                </div>
                                <p className="p-slider-home">Optimización de recursos, eficiencia en los resultados</p>
                                <Link className="btn btn-slider" to="/cybersecurity" type="button">CONOCE MÁS</Link>
                            </div>
                            <div className="col-slider-home">
                                <img className="img-slider-home" src="images/sliders/slider1-img.png" alt="Imagen del Slider 1" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="slider2">
                            <div className="text-wrap-slider">
                                <h2 className="title-slider">Integramos Tecnologías</h2>
                                <div>
                                    <hr className="border-slider-home"/>
                                </div>
                                <p className="p-slider-home">Soluciones Integrales e Innovación de acuerdo a las tendencias tecnólogicas</p>
                                <Link className="btn btn-slider" to="/servicePortfolio" type="button">CONOCE MÁS</Link>
                            </div>
                            <div className="col-slider-home">
                                <img className="img-slider-home" src="images/sliders/slider2-img.png" alt="Imagen del Slider 2" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slider3">
                            <div className="text-wrap-slider">
                                <h2 className="title-slider-home3">Fidelización y Satisfacción de Nuestros Clientes</h2>
                                <div>
                                    <hr className="border-slider-home"/>
                                </div>
                                <p className="p-slider-home">Nuestra más grande prioridad</p>
                                <Link className="btn btn-slider" to="/aboutUs" type="button">CONOCE MÁS</Link>
                            </div>
                            <div className="col-slider-home">
                                <img className="img-slider-home" src="images/sliders/slider3-img.png" alt="Imagen del Slider 3" />
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
                <div className="wave-slider" style={{height: "150px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#E3E4E5"}}></path>
                    </svg>
                </div>
                <div className="wave-slider2" style={{height: "100px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#E3E4E5"}}></path>
                    </svg>
                </div>
                <div className="wave-slider3" style={{height: "70px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#E3E4E5"}}></path>
                    </svg>
                </div>
                <div className="wave-slider4" style={{height: "50px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#E3E4E5"}}></path>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Sliders;