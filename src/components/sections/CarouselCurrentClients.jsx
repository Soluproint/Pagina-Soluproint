
import {Link} from 'react-router-dom'

function CarouselCurrentClients() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Clientes Actuales</h1>
                <hr className="border border-primary border-8"/>
                <hr className="border border-primary border-9"/>                
                <div className="carousel-clients">
                    <div className="companies"><Link to="https://www.facebook.com/arborix.apartamentos/"><img src="images\current-clients\ARBORIX.png" alt="Cliente Edificio Arborix"/></Link></div>
                    <div className="companies"><Link to="https://www.atempi.co/"><img src="images\current-clients\ATEMPI.png" alt="Cliente Seguridad Atempo"/></Link></div>
                    <div className="companies"><Link to="https://montessori.edu.co/es/"><img src="images\current-clients\COLEGIO-MONTESSORI.png" alt="Cliente Colegio Montessori"/></Link></div>
                    <div className="companies"><Link to="https://explomin.com/"><img src="images\current-clients\EXPLOMIN.png" alt="Cliente Explomin"/></Link></div>
                    <div className="companies"><Link to="https://gisaico.com/"><img src="images\current-clients\GISAICO.png" alt="Cliente Gisaico"/></Link></div>
                    <div className="companies"><Link to="https://www.powerchinacolombia.com/"><img src="images\current-clients\POWER-CHINA.png" alt="Cliente Power China Colombia"/></Link></div>
                    <div className="companies"><Link to="https://www.puntoscolombia.com/personas/inicio"><img src="images\current-clients\PUNTOS-COLOMBIA.png" alt="Cliente Puntos Colombia"/></Link></div>
                    <div className="companies"><Link to="https://www.quintasdelpalmar.com/"><img src="images\current-clients\QUINTAS-DEL-PALMAR.png" alt="Cliente Urbanización Quintas del Palmar"/></Link></div>
                    <div className="companies"><Link to="https://www.solufibras.com/"><img src="images\current-clients\SOLUFIBRAS.png" alt="Cliente Solufibras"/></Link></div>
                    <div className="companies"><Link to="https://www.stracon.com/"><img src="images\current-clients\STRACON.png" alt="Cliente Stracon"/></Link></div>
                    <div className="companies"><Link to="https://www.uniremington.edu.co/"><img src="images\current-clients\UNIREMINGTON.png" alt="Cliente UniRemington"/></Link></div>
                    <div className="companies"><Link to="https://vermontmedellin.edu.co/"><img src="images\current-clients\VERMONT-SCHOOL.png" alt="Cliente Vermont School"/></Link></div>
                    <div className="companies"><Link to="https://xpertgroup.co/"><img src="images\current-clients\XPERT-GROUP.png" alt="Cliente Xpert Group"/></Link></div>
                    <div className="companies"><Link to="https://www.continentalgold.com/"><img src="images\current-clients\ZIJIN.png" alt="Cliente Xpert Group"/></Link></div>
                </div>
            </div>
        </>
    );
}

export default CarouselCurrentClients;