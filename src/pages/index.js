import HomeLayout from "../components/HomeLayout";
import Link from "next/link";

import { motion } from "framer-motion";
import { postVariants } from "src/shared/animationVariants";

const Home = ({ posts }) => {
  return (
    <HomeLayout
      title="Kartik Nair"
      bio="Developer and designer striving to be better. Below are the projects I've worked on in the past year"
      writing={true}
    >
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post" key={post.path}>
              <motion.div variants={postVariants}>
                <img
                  src={post.attributes.image}
                  alt={post.attributes.description}
                ></img>
                <h3>{post.attributes.title}</h3>
                <p>{post.attributes.description}</p>
                <div className="links">
                  <Link
                    scroll={false}
                    href="/work/[project]"
                    as={`/work/${post.path}`}
                  >
                    <a title="Learn more" className="dim mr1">
                      Learn more
                    </a>
                  </Link>
                  <a
                    href={post.attributes.link}
                    title="See live"
                    className="dim"
                  >
                    See in action
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          img {
            max-width: 100%;
          }

          .mr1 {
            margin-right: 1rem;
          }

          .links a {
            color: inherit;
            text-decoration: underline;
          }

          .post {
            width: 100%;
            text-decoration: none;
            margin: 2rem 0 3.5rem 0;
          }
        `}
      </style>
    </HomeLayout>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const fm = require("front-matter");

  const posts = fs.readdirSync("content/work");
  let newPosts = [];

  posts.forEach((post) => {
    const data = fs.readFileSync(`content/work/${post}`, "utf8");
    let newPost = fm(data);
    newPost.path = post.slice(0, -3);
    newPosts.push(newPost);
  });

  newPosts.sort((a, b) => {
    return b.attributes.date - a.attributes.date;
  });

  return {
    props: {
      posts: newPosts,
    },
  };
}

export default Home;
