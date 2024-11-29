import React, { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useFetch } from "../../../hooks/useFetch";

const PostBlog = () => {
  const [blogData, setBlogData] = useState(null); // Se inicializa el estado vacío
  const { data, loading, error } = useFetch(
    "https://blog.soluproint.com/api/posts?populate=*"
  ); // Trae los datos de la API

  const BASE_CDN_URL = process.env.REACT_APP_BASE_CDN_URL;

  useEffect(() => {
    if (data && data.data) {
      setBlogData(data.data); // Cuando los datos se resuelven, se actualiza el estado
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
      {blogData
        ?.sort((a, b) => b.id - a.id) // Ordena los posts en orden descendente de ID
        .map((post) => {
          // Validar si la URL de la imagen es relativa o absoluta
          const fullImageUrl = post.image[0].url
            ? post.image[0].url.startsWith("http")
              ? post.image[0].url // Usar URL absoluta si ya está completa
              : `${BASE_CDN_URL}${post.image[0].url}` // Concatenar BASE_CDN_URL si es relativa
            : null;

          return (
            <section key={post.id} className="container-post">
              {/* Imagen */}
              <figure className="container-img-post">
                {fullImageUrl && (
                  <img
                    className="img-post"
                    src={fullImageUrl}
                    alt={post.title || "Imagen del post"}
                  />
                )}
              </figure>

              {/* Categoría y Fecha */}
              <section className="category-date">
                {/* Mostrar categorías separadas por comas */}
                <section className="category">
                  {post.categories.map((category) => category.name).join(", ")}
                </section>
                {/* Fecha */}
                <section>
                  <h3 className="date">{post.date}</h3>
                </section>
              </section>

              {/* Artículo */}
              <article className="content-post">
                {/* Título */}
                <h2 className="title-post">{post.title}</h2>
                {/* Contenido */}
                <BlocksRenderer
                  content={post.content}
                  blocks={{
                    image: ({ image }) => {
                      const complementaryFullImageUrl = image.url.startsWith(
                        "http"
                      )
                        ? image.url
                        : `${BASE_CDN_URL}${image.url}`;
                      return (
                        <div className="container-img-complementary">
                          <img
                            className="img-complementary"
                            src={complementaryFullImageUrl}
                            width={image.width}
                            height={image.height}
                            alt={image.alternativeText || ""}
                          />
                        </div>
                      );
                    },
                    paragraph: ({ children }) => (
                      <p className="p-content">{children}</p>
                    ),
                    heading: ({ children, level }) => {
                      switch (level) {
                        case 1:
                          return <h1 className="title-post">{children}</h1>;
                        case 2:
                          return <h2 className="subtitle-post">{children}</h2>;
                        default:
                          return <h1 className="title-post">{children}</h1>;
                      }
                    },
                    list: ({ children }) => (
                      <ul className="blog-list">{children}</ul>
                    ),
                    listItem: ({ children }) => (
                      <li className="blog-list-item">{children}</li>
                    ),
                  }}
                />
              </article>
            </section>
          );
        })}
    </section>
  );
};

export default PostBlog;
