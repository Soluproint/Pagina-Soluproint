function ContactForm() {
  return (
    <>
      <div className="container-fluid-contact-form">
        <div className="container-title-services-form">
          <h2 className="title-form2">ASESORÍA PERSONALIZADA</h2>
        </div>
        <form className="contact-form">
          <div className="half left cf">
            <h5 id="contact-titles">Nombre Completo</h5>
            <input
              className="input1"
              id="nombre"
              type="text"
              placeholder="Digite Nombre y Apellidos"
            />
            <input
              className="input2"
              id="nombre"
              type="text"
              placeholder="Nombre y Apellidos"
            />
            <br />
            <h5 id="contact-titles">Email</h5>
            <input
              className="input1"
              id="correo"
              type="email"
              placeholder="Digite Correo Electrónico"
            />
            <input
              className="input2"
              id="correo"
              type="email"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="half left cf">
            <h5 id="contact-titles">Mensaje</h5>
            <textarea
              id="mensaje"
              name="message"
              type="text"
              placeholder="Escriba aquí su mensaje"
            ></textarea>
          </div>
          <input type="submit" value="Enviar" id="input-submit" />
        </form>
      </div>
    </>
  );
}

export default ContactForm;
