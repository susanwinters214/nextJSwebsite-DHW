import ReactMarkdown from "react-markdown";
import Image from "next/image";


import PostHeader from "./post-header";
import classes from "./post-content.module.css";


function PostContent(props) {
  const { post } = props;

  const imgPath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

   
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imgPath} />

      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
export default PostContent;
