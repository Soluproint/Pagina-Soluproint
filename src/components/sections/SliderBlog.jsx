function SliderBlog() {
    return (
        <>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="container-carousel">
                    <div className="carousel-item active">
                        <div className="col-slider-blog">
                            <div className="text-wrap">
                                <h2 className="title-slider">Información de Interés</h2>
                                <div>
                                    <hr className="border-slider-blog"/>
                                </div>
                                <p className="p-slider">Publicamos y replicamos artículos sobre noticias de la actualidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderBlog;