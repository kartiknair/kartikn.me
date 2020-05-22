import SEO from "src/components/SEO";
import { getMarkdownFiles } from "src/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

const Writing = ({ posts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SEO
        title="Kartik Nair's Blog"
        description="My writing, here I write about my experiences while learning web development & design."
        url={`${process.env.NEXT_PUBLLIC_HOME_URL}/writing`}
      />

      {posts.map((post) => (
        <Link
          href="writing/[slug]"
          as={`writing/${post.slug}`}
          scroll={false}
          key={post.slug}
        >
          <a className="dim post">
            <h4>{post.data.title}</h4>
            <p>{post.data.description}</p>
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: inherit;
            background-image: none;
          }

          .post {
            display: block;
            margin-bottom: 2.5rem;
          }
        `}
      </style>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { posts: getMarkdownFiles("content/writing") } };
}

export default Writing;
