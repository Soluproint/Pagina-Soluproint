import React from "react";

//Importamos los componentes de las páginas
import SliderBlog from "../components/sections/SliderBlog";
import PostBlog from "../components/sections/PostBlog/PostBlog";

function Blog() {
  return (
    <div className="pages">
      <main id="content">
        <SliderBlog />
        <PostBlog />
      </main>
    </div>
  );
}

export default Blog;
