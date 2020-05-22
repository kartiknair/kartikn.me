import SEO from "src/components/SEO";
import { getMarkdownFile } from "src/lib/utils";
import { useCloudinaryAndScroll } from "src/lib/hooks";

const Project = ({ project }) => {
  useCloudinaryAndScroll(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME);

  return (
    <>
      <SEO
        title={project.data.title}
        description={project.data.description}
        image={project.data.image}
        url={`${process.env.NEXT_PUBLLIC_HOME_URL}/${project.slug}`}
      />
      <h2>{project.data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
    </>
  );
};

export async function getStaticPaths() {
  const fs = require("fs");
  const posts = fs.readdirSync("content/work");
  const paths = posts.map((post) => `/${post.slice(0, -3)}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: { project: getMarkdownFile(`content/work/${params.slug}.md`) },
  };
}

export default Project;
