import {Link} from 'react-router-dom'

function CarouselSatisfiedClients() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="h-titles">Casos de Éxito</h1>
                <hr className="border border-primary border-8"/>
                <hr className="border border-primary border-9"/>                
                <div className="carousel-satisfied-clients">
                    <div className="companies"><Link target='_blank' to="https://www.clinicavida.com/"><img src="images\satisfied-clients\CLINICA-VIDA.png" alt="Cliente Clínica Vida"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.comfama.com/"><img src="images\satisfied-clients\COMFAMA.png" alt="Cliente Comfama"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.grupodlplus.com/"><img src="images\satisfied-clients\Dlplus.png" alt="Cliente grupo DL plus"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.edatel.com.co/"><img src="images\satisfied-clients\EDATEL.png" alt="Cliente Edatel"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://formasintimas.com/"><img src="images\satisfied-clients\FORMAS-INTIMAS.png" alt="Cliente Formas Intimas"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.hospitalmua.gov.co/Paginas/default.aspx"><img src="images\satisfied-clients\HMUA.png" alt="Cliente Hospital Manuel Uribe Angel"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://solciviles.com/kiwi-apartamentos/"><img src="images\satisfied-clients\KIWI.png" alt="Cliente Kiwi Apartamentos"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.facebook.com/profile.php?id=100069505147355"><img src="images\satisfied-clients\O'CLOCK.png" alt="Cliente O'Clock Apartamentos"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.constructoracapital.com/blog/4-razones-para-vivir-en-perlato-apartamentos/"><img src="images\satisfied-clients\PERLATO.png" alt="Cliente Urbanización Perlato-Tierra Firme "/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.spinsa.com.co/"><img src="images\satisfied-clients\SPIN.png" alt="Cliente SPIN S.A.S"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.taxmaya.com/"><img src="images\satisfied-clients\TAX-MAYA.png" alt="Cliente Tax Maya"/></Link></div>
                    <div className="companies"><Link target='_blank' to="https://www.tigo.com.co/"><img src="images\satisfied-clients\TIGO-UNE.png" alt="Cliente Tigo Une"/></Link></div>
                </div>
            </div>
        </>
    );
}

export default CarouselSatisfiedClients;