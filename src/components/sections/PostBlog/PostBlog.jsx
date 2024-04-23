import {Link} from 'react-router-dom';

function PostBlog() {
    return (
        <>
            <div className="container-fluid-blog">
                <h1 className="h-titles">Blog Soluproint</h1>
                <hr className="border border-primary border-4"/>
                <hr className="border border-primary border-5"/>
                <div className="container-post">
                    <div className="container-img-post">
                        <img className="img-post" src="images/posts-blog/pdf-malicioso.png" alt="Post PDF malicioso" />
                    </div>
                    <div className="category-date">
                        <div>
                            <Link target='_blank' to="/malware" className="category">MALWARE</Link>
                        </div>
                        <div>
                            <h3 className="date">08/03/2024</h3>
                        </div>
                    </div>
                    <div className="content-post">
                        <h2 className="title-post">Crecen las cadenas de infección usando archivos PDF</h2>
                        <p className="p-content">
                            <Link target='_blank' to="https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-in-deceptive-pdf-the-gateway-to-malicious-payloads/" className="links-posts">McAfee Labs ha observado</Link> recientemente un aumento significativo en la distribución de malware a través de archivos PDF.
                            Ciertas instancias de malware pueden residir en correos electrónicos aparentemente inofensivos, particularmente en los archivos PDF adjuntos que los acompañan. <br />
                            La tendencia posterior observada en los últimos tres meses se refiere a la prevalencia de malware distribuido a través de vectores ejecutables no portátiles (no PE).
                        </p>
                        <h4 className="subtitles-post">¿Porqué PDF?</h4>
                        <p className="p-content">
                            Al implementar medidas de bloqueo de macro para los archivos de Office entregados por Internet, los actores de amenazas se vieron obligados a idear métodos alternativos para la distribución de malware por correo electrónico.
                            La compleja estructura de los archivos PDF los hace susceptibles a la explotación, lo que plantea importantes desafíos a la hora de detectar contenido malicioso en su interior. Como formato de archivo comúnmente empleado y distribuido a través de archivos adjuntos, los PDF representan una vía atractiva para que los atacantes engañen a los usuarios haciéndoles creer que son benignos.
                            Al explotar esta confianza, los atacantes pueden crear fácilmente malware basado en PDF, que a menudo contiene cargas útiles alojadas en sitios web maliciosos. Tras la interacción del usuario, como hacer clic en un enlace, estos archivos PDF descargan el <em>payload</em> dañino.                     
                        </p>
                        <h4 className="subtitles-post">Cadena de infección</h4>
                        <p className="p-content">
                            Esta cadena de infección emergente que involucra, entre otros, al Agente Tesla, se inicia a partir de un correo electrónico que contiene un archivo PDF adjunto, que posteriormente facilita la difusión de la carga útil final.
                            En la versión desactualizada y sin parches de Acrobat Reader, los archivos PDF ejecutan directamente JavaScript incrustado usando MSHTA, iniciando posteriormente PowerShell, lo que facilita la inyección de procesos. Por el contrario, en la última versión de Acrobat Reader, los archivos PDF no pueden ejecutar JavaScript directamente. 
                            En lugar de ello, redireccionan a un sitio web malicioso, desde donde se descarga el <em>script</em>. El proceso posterior sigue siendo coherente con el caso anterior.
                        </p>
                        <div className="container-img-complementary">
                            <img src="images/posts-blog/acrobat-reader.png" alt="Imagen complementaria del post" className="img-complementary" align="center"/>
                        </div>
                        <h4 className="source-img">Fuente de la imagen: <Link target='_blank' to="https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-in-deceptive-pdf-the-gateway-to-malicious-payloads/" className="links-posts">McAfee</Link></h4>
                        <p className="p-content">
                            Al examinar la estructura interna del PDF, se descubrió que dentro de uno de los siete objetos, se identificaron algunos datos hexadecimales y una URL incrustada. Los atacantes utilizan las URL de Bitly para ocultar enlaces maliciosos, lo que los hace más difíciles de detectar.
                            Esto es especialmente útil en esquemas de phishing en los que engañan a los usuarios para que revelen información confidencial. Los enlaces dinámicos de Bitly permiten a los atacantes cambiar de destino, mejorando su capacidad para evadir la detección. Además, los atacantes aprovechan la confianza asociada a Bitly para mejorar el éxito de sus tácticas de ingeniería social.
                        </p>
                        <h4 className="source-post">Fuente: <Link target='_blank' to="https://www.mcafee.com/blogs/other-blogs/mcafee-labs/rise-in-deceptive-pdf-the-gateway-to-malicious-payloads/" className="links-posts">McAfee</Link></h4>
                        <h4 className="author-post">Autor: <Link target='_blank' to="https://www.linkedin.com/in/manuela-l%C3%B3pez-781285288/" className="links-posts">Manuela López Vanegas</Link></h4>
                    </div>
                </div>
                
                
            </div>
        </>
    );
}
    
    export default PostBlog;
    
    