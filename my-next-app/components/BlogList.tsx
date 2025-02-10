import { useState } from "react";
import { blogPosts } from "../data/blogPosts";

export default function BlogList() {
  const [openPostId, setOpenPostId] = useState<string | null>(null);


  const togglePost = (id: string) => {
    setOpenPostId(openPostId === id ? null : id);
  };

  return (
    <section className="blog-container" id="blog">
      {blogPosts.map((post) => (
        <article key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <p>{post.description}</p>
          

          <button onClick={() => togglePost(post.id)}>
            {openPostId === post.id ? "Skrýt" : "Číst více"}
          </button>  

          {openPostId === post.id && (
            <div>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          )}
        </article>
      ))}
    </section>
  );
}

