import SEO from "src/components/SEO";
import { getMarkdownFile } from "src/lib/utils";
import useCloudinary from "src/lib/useCloudinary";

const Post = ({ post }) => {
  useCloudinary(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME);

  return (
    <>
      <SEO
        title={post.data.title}
        description={post.data.description}
        type="post"
        url={`${process.env.NEXT_PUBLLIC_HOME_URL}/${post.slug}`}
      />
      <h2>{post.data.title}</h2>
      <small>{new Date(post.data.date).toDateString()}</small>
      <p>{post.data.description}</p>
      <p>—</p>

      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>
  );
};

export async function getStaticPaths() {
  const fs = require("fs");
  const posts = fs.readdirSync("content/writing");
  const paths = posts.map((post) => `/writing/${post.slice(0, -3)}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: { post: getMarkdownFile(`content/writing/${params.slug}.md`) },
  };
}

export default Post;
