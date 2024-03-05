function SliderContact() {
    return (
        <>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="container-carousel">
                    <div className="carousel-item active">
                        <div className="container-slider-contact">
                            <div className="text-wrap-slider-pages">
                                <h2 className="title-slider-pages">Disponibilidad para atenderte</h2>
                                <div>
                                    <hr className="border-slider-contact"/>
                                </div>
                                <p className="p-slider-pages">Contáctanos hoy y déjanos ser el impulso que lleva tu empresa al siguiente nivel</p>
                            </div>
                            <div className="col-slider-pages">
                                <img className="img-slider-pages" src="images/sliders/slider-contacto-img.png" alt="Imagen del Slider Contacto" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave-slider" style={{height: "150px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#062A50"}}></path>
                    </svg>
                </div>
                <div className="wave-slider2" style={{height: "100px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#062A50"}}></path>
                    </svg>
                </div>
                <div className="wave-slider3" style={{height: "70px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#062A50"}}></path>
                    </svg>
                </div>
                <div className="wave-slider4" style={{height: "50px", overflow: "hidden"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M-4.22,104.13 C232.78,-147.52 262.69,312.34 522.85,-30.08 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill:"#062A50"}}></path>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default SliderContact;