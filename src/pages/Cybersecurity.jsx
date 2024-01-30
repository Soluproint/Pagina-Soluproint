import React from "react";

//Importamos los componentes de las páginas
import SliderCybersecurity from '../components/sections/SliderCybersecurity';
import SGSI from "../components/sections/SGSI";
import SpecializedConsultancies from "../components/sections/SpecializedConsultancies";
import QualityManagement from "../components/sections/QualityManagement";
import ServicesForm from "../components/sections/ServicesForm";

function Cybersecurity () {
    return (
        <div className="pages">
            <main id="content">
                <SliderCybersecurity/>
                <SGSI/>
                <SpecializedConsultancies/>
                <QualityManagement/>
                <ServicesForm/>
            </main>
        </div>
    );
}

export default Cybersecurity;