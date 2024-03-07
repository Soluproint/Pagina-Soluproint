import React from "react";

//Importamos los componentes de las páginas
import SliderBlog from "../components/sections/SliderBlog";

function Blog () {
    return (
        <div className="pages">
            <main id="content">
                <SliderBlog/>
                <div className="soon2">
                    <h1>Esta es la ventana de Blog</h1><br />
                    <h2>Próximamente disponible</h2><br /><br />
                </div>
            </main>
        </div>
    );
}

export default Blog;