import React, { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useFetch } from "../../../hooks/useFetch";

const PostBlog = () => {
  const [blogData, setBlogData] = useState(null); // Inicializas el estado vacío
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/posts?populate=categories,date,image,content,quote"
  ); // Trae los datos de la API

  useEffect(() => {
    if (data && data.data) {
      setBlogData(data.data); // Cuando los datos se resuelven, actualizas el estado
    }
  }, [data]); // Se ejecuta cuando `data` cambia

  if (loading) return <div>Loading...</div>;

  // Si hay un error, muestra el mensaje de error en lugar de renderizar el objeto de error completo
  if (error) return <div>Error: {error.message || "Something went wrong"}</div>;

  return (
    <section className="container-fluid-blog">
      <h1 className="h-titles">Blog Soluproint</h1>
      <hr className="border border-primary border-4" />
      <hr className="border border-primary border-5" />
      {blogData?.map((post) => (
        <section key={post.id} className="container-post">
          {/* Imagen */}
          <figure className="container-img-post">
            {post.attributes.image && (
              <img
                className="img-post"
                src={`http://localhost:1337${post.attributes.image.data.attributes.url}`}
                alt={post.attributes.title}
              />
            )}
          </figure>

          {/* Categoría y Fecha */}
          <section className="category-date">
            {/* Mostrar categorías en líneas separadas */}
            {/* <div className="category">
              {post.attributes.categories.data.map((category, index) => (
                <div key={index}>{category.attributes.name}</div>
              ))}
            </div> */}
            {/* Mostrar categorías separadas por comas */}
            <section className="category">
              {post.attributes.categories.data
                .map((category) => category.attributes.name)
                .join(", ")}
            </section>
            {/* Fecha */}
            <section>
              <h3 className="date">{post.attributes.date}</h3>
            </section>
          </section>

          {/* Artículo */}
          <article className="content-post">
            {/* Título */}
            <h2 className="title-post">{post.attributes.title}</h2>
            {/* Contenido */}
            <BlocksRenderer
              content={post.attributes.content}
              blocks={{
                image: ({ image }) => {
                  return (
                    <div className="container-img-complementary">
                      <img
                        className="img-complementary"
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        alt={image.alternativeText || ""}
                      />
                    </div>
                  );
                },
              }}
            />
          </article>
        </section>
      ))}
    </section>
  );
};

export default PostBlog;
