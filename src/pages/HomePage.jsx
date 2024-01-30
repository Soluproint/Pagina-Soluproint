import React from "react";

//Importamos los componentes de las páginas
import Sliders from '../components/sections/Sliders'
import ValueOffer from '../components/sections/ValueOffer'
import Services from '../components/sections/Services'
import Consulting from '../components/sections/Consulting'
import CarouselCurrentClients from "../components/sections/CarouselCurrentClients";

function HomePage () {
    return (
        <div className="pages">
            <main id="content">
                <Sliders/>
                <ValueOffer/>
                <Services/>
                <Consulting/>
                <CarouselCurrentClients/>
            </main>
        </div>
    );
}

export default HomePage;