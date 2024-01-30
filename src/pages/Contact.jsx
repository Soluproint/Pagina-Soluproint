import React from "react";

//Importamos los componentes de las páginas
import SliderContact from "../components/sections/SliderContact";
import AttentionLines from "../components/sections/AttentionLines";

function Contact() {
    return (
        <div className="pages">
            <main id="content">
                <SliderContact/>
                <AttentionLines/>
            </main>
        </div>
    );
}

export default Contact;