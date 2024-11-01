import React from "react";

//Importamos los componentes de las páginas
import SliderContact from "../components/sections/SliderContact";
import AttentionLines from "../components/sections/AttentionLines";
import GoogleMap from "../components/sections/GoogleMap";
import ContactForm from "../components/sections/ContactForm";

function Contact() {
    return (
        <div className="pages">
            <main id="content">
                <SliderContact/>
                <AttentionLines/>
                <GoogleMap/>
                <ContactForm/>
            </main>
        </div>
    )
}

export default Contact;