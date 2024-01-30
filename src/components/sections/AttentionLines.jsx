function AttentionLines() {
    return (
        <>
            <div className="container-fluid-attention">            
                <div className="row-attention">
                    <div className="col-icon-map">
                        <img className="img-map" src="images/icons/mapa.png" width="180" alt="icono-mapa"/>
                        <h2 className="h-titles-attention1">¿Dónde estamos</h2>
                        <h2 className="h-titles-attention2">UBICADOS?</h2> 
                    </div>
                    <div className="container-lines">
                        <div>
                            <h2 className="h-titles-attention3">NUESTRAS LÍNEAS DE</h2>
                            <h2 className="h-titles-attention4">ATENCIÓN</h2>
                        </div>
                        <div className="col-icons-container">
                            <div>
                                <img className="col-icon-wpp" src="images/icons/whatsapp.png" alt="icono-whatsapp" />
                                <img className="col-icon-wpp" src="images/icons/mail.png" alt="icono-gmail" />
                            </div>
                            <div className="col-icons-contact">
                                <h2 className="wpp-contact">+57 3003653124</h2>
                                <h2 className="mail-contact">info@soluproint.com</h2>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AttentionLines;