import HomeLayout from "../../components/HomeLayout";
import Link from "next/link";

import { motion } from "framer-motion";
import { postVariants } from "../../animationVariants";

const Home = ({ posts }) => {
  return (
    <HomeLayout
      title="Kartik Nair - Blog"
      bio="Developer and designer striving to be better. Below are my blog posts, I talk about my journey learning and building things"
      writing={false}
    >
      <div className="posts">
        {posts.map((post) => {
          return (
            <motion.div variants={postVariants}>
              <div className="post dim" key={post.path}>
                <Link href="writing/[slug]" as={`writing/${post.path}`}>
                  <a title={post.attributes.title}>
                    <h3>{post.attributes.title}</h3>
                    <p>{post.attributes.description}</p>
                  </a>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>
        {`
          .post {
            width: 100%;
            margin: 2rem 0;
          }

          .post a {
            color: inherit;
            text-decoration: none;
          }
        `}
      </style>
    </HomeLayout>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const fm = require("front-matter");

  const posts = fs.readdirSync("content/writing");
  let newPosts = [];

  posts.forEach((post) => {
    const data = fs.readFileSync(`content/writing/${post}`, "utf8");
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
