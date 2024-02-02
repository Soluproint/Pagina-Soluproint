import {Link} from 'react-router-dom'

function CarouselSatisfiedClients() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Casos de Éxito</h1>
                <hr className="border border-primary border-8"/>
                <hr className="border border-primary border-9"/>                
                <div className="carousel-clients">
                    <div className="companies"><Link to="https://www.clinicavida.com/"><img src="images\satisfied-clients\CLINICA-VIDA.png" alt="Cliente Clínica Vida"/></Link></div>
                    <div className="companies"><Link to="https://www.comfama.com/"><img src="images\satisfied-clients\COMFAMA.png" alt="Cliente Comfama"/></Link></div>
                    <div className="companies"><Link to=""><img src="images\satisfied-clients\DIP.png" alt="Cliente dIp"/></Link></div>
                    <div className="companies"><Link to="https://www.edatel.com.co/"><img src="images\satisfied-clients\EDATEL.png" alt="Cliente Edatel"/></Link></div>
                    <div className="companies"><Link to="https://formasintimas.com/"><img src="images\satisfied-clients\FORMAS-INTIMAS.png" alt="Cliente Formas Intimas"/></Link></div>
                    <div className="companies"><Link to="https://www.hospitalmua.gov.co/Paginas/default.aspx"><img src="images\satisfied-clients\HMUA.png" alt="Cliente Hospital Manuel Uribe Angel"/></Link></div>
                    <div className="companies"><Link to="https://italcol.com/"><img src="images\satisfied-clients\ITALCOL.png" alt="Cliente Italcol"/></Link></div>
                    <div className="companies"><Link to="https://solciviles.com/kiwi-apartamentos/"><img src="images\satisfied-clients\KIWI.png" alt="Cliente Kiwi Apartamentos"/></Link></div>
                    <div className="companies"><Link to="https://www.mattelsa.net/"><img src="images\satisfied-clients\MATTELSA.png" alt="Cliente Mattelsa"/></Link></div>
                    <div className="companies"><Link to="https://www.facebook.com/profile.php?id=100069505147355"><img src="images\satisfied-clients\O'CLOCK.png" alt="Cliente O'Clock Apartamentos"/></Link></div>
                    <div className="companies"><Link to="https://www.constructoracapital.com/blog/4-razones-para-vivir-en-perlato-apartamentos/"><img src="images\satisfied-clients\PERLATO.png" alt="Cliente Urbanización Perlato-Tierra Firme "/></Link></div>
                    <div className="companies"><Link to="https://www.facebook.com/Rapipagossa/?locale=es_LA"><img src="images\satisfied-clients\RAPI-PAGOS.png" alt="Cliente Rapi Pagos "/></Link></div>
                    <div className="companies"><Link to="https://www.spinsa.com.co/"><img src="images\satisfied-clients\SPIN.png" alt="Cliente SPIN S.A.S"/></Link></div>
                    <div className="companies"><Link to="https://www.taxmaya.com/"><img src="images\satisfied-clients\TAX-MAYA.png" alt="Cliente Tax Maya"/></Link></div>
                    <div className="companies"><Link to="https://www.tigo.com.co/"><img src="images\satisfied-clients\TIGO-UNE.png" alt="Cliente Tigo Une"/></Link></div>
                </div>
            </div>
        </>
    );
}

export default CarouselSatisfiedClients;