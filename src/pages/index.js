import SEO from "src/components/SEO";
import { getMarkdownFiles } from "src/lib/utils";
import Link from "next/link";
import { useCloudinaryAndScroll } from "src/lib/hooks";

const Home = ({ projects }) => {
  useCloudinaryAndScroll(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME);

  return (
    <div>
      <SEO title="Kartik Nair" description="My personal website and blog" />
      <h3>
        Hey there, I'm Kartik Nair. I like creating and writing about websites.
        <br />
        <br />
        Currently I'm finishing my computer systems degree at Middlesex
        University while also building web experiences & writing about them.
      </h3>

      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.slug}>
            <img
              data-src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${project.data.image}`}
              alt={project.data.description}
              className="cld-responsive"
            />
            <h4>{project.data.title}</h4>
            <p>{project.data.description}</p>
            <div className="links">
              <Link href="/[slug]" as={`/${project.slug}`} scroll={false}>
                <a>Learn more</a>
              </Link>
              <a href={project.data.link}>See it in action</a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .links {
            display: flex;
          }

          .links a {
            margin: 0;
          }

          .links a:first-child {
            margin-right: 1rem;
          }

          .projects {
            margin-top: 2rem;
          }

          .project {
            margin-bottom: 2.5rem;
          }

          .project h4 {
            margin: 1.5rem 0 0 0;
          }

          h3 {
            margin-bottom: 3rem;
          }

          @media (max-width: 768px) {
            h3 {
              font-size: 1.25rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { projects: getMarkdownFiles("content/work") } };
}

export default Home;
