import React from "react";
import { useFetch } from "../useFetch";

//Importamos los componentes de las páginas
import SliderBlog from "../components/sections/SliderBlog";

function Blog () {

    const {data, loading, error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users") 
    
    return (
        <div className="pages">
            <main id="content">
                <SliderBlog/>
                <div className="soon2">
                    <h1>Esta es la ventana de Blog</h1><br />
                    <button onClick={handleCancelRequest}>Cancel Request</button>
                    <h2>Lista de usuarios recuperados de la API de manera aleatoria</h2><br /><br />
                    <ul>
                        {error && <li>Error: {error}</li>}
                        {loading && <li>Loading...</li>}
                        {data?.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}


export default Blog;