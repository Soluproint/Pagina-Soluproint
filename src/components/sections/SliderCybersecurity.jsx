function SliderCybersecurity() {
    return (
        <>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="container-carousel">
                    <div className="carousel-item active">
                        <div className="container-slider-cybersecurity">
                            <div className="text-wrap">
                                <h2 className="title-slider">Seguridad de la Información y Ciberseguridad</h2>
                                <div>
                                    <hr className="border-slider-ciber"/>
                                </div>
                                <p className="p-slider">Garantice la seguridad de su empresa en el mundo digital <br />Protegemos su activo más valioso: la información</p>
                            </div>
                            <div className="col-slider-ciber">
                                <img className="img-slider-ciber" src="images/sliders/slider-ciberseguridad-img.png" alt="Imagen del Slider Ciberseguridad" />
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

export default SliderCybersecurity;