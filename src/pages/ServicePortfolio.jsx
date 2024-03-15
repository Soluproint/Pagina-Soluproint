import React from "react";

//Importamos los componentes de las páginas
import SliderServices from '../components/sections/SliderServices'
import ServicesSoluproint from "../components/sections/ServicesSoluproint";
import Infraestructure from "../components/sections/Infraestructure";
import Innovation from "../components/sections/Innovation";
import CarouselSatisfiedClients from "../components/sections/CarouselSatisfiedClients";
import Networks from "../components/sections/Networks";
import AirConditioners from "../components/sections//AirConditioners/AirConditioners";

function ServicePortfolio () {
    return (
        <div className="pages">
            <main id="content">
                <SliderServices/>
                <ServicesSoluproint/>
                <Infraestructure/>
                <Innovation/>
                <CarouselSatisfiedClients/>
                <Networks/>
                <AirConditioners/>
            </main>
        </div>
    );
}

export default ServicePortfolio;