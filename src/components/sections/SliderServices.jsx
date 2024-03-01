function SliderServices() {
    return (
        <>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="container-carousel">
                    <div className="carousel-item active">
                        <div className="container-slider-services">
                            <div className="text-wrap">
                                <h2 className="title-slider">Integración de Portafolios de Servicios</h2>
                                <div>
                                    <hr className="border-slider-services"/>
                                </div>
                                <p className="p-slider">Soluciones integrales que se traducen en mayor eficiencia<br />y optimzación de recursos</p>
                            </div>
                            <div className="col-slider-services">
                                <img className="img-slider-pages" src="images/sliders/slider-servicios-img.png" alt="Imagen del Slider Servicios" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-slider" style={{height: "150px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#09294f"}}></path>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default SliderServices;