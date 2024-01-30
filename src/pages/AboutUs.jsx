import React from "react";

//Importamos los componentes de las páginas
import SliderAboutUs from '../components/sections/SliderAboutUs';
import Company from "../components/sections/Company";
import Values from "../components/sections/Values";
import MissionVision from "../components/sections/MissionVision";

function AboutUs () {
    return (
        <div className="pages">
            <main id="content">
                <SliderAboutUs/>
                <Company/>
                <Values/>
                <MissionVision/>
            </main>
        </div>
    );
}

export default AboutUs;