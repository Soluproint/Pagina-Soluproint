function Company() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">¿Quiénes Somos?</h1>
                <hr className="border border-primary border-4"/>
                <hr className="border border-primary border-5"/>                
                <div className="row-about-us">
                    <div className="col-md-auto">
                        <img className="img-company" src="images/icons/soluproint.png" alt="Logo-empresa-Soluproint" />
                    </div>
                    <div className="col-about">
                        <p className="p-about-us">Ofrecemos soluciones con innovación, calidad, estrategia y construcción de ofertas bajo el análisis de la rentabilidad de cada negocio forjando la optimización de recursos medibles y los cuales están representados en las inversiones, eficiencia de los resultados y la satisfacción de cada cliente.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Company;