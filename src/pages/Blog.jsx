import React from "react";
import { useFetch } from "../useFetch";

//Importamos los componentes de las páginas
import SliderBlog from "../components/sections/SliderBlog";

function Blog () {

    const {data, loading, error} = useFetch("https://api-colombia.com/api/v1/Department") 
    
    return (
        <div className="pages">
            <main id="content">
                <SliderBlog/>
                <div className="soon2">
                    <h1>Esta es la ventana de Blog</h1><br />
                    <h2>Lista de ciudades recuperadas de API Colombia</h2><br /><br />
                    <ul>
                        {error && <li>Error: {error}</li>}
                        {loading && <li>Loading...</li>}
                        {data?.map((city) => (
                            <li key={city.id}>{city.name}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}


export default Blog;