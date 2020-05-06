import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";

import { motion } from "framer-motion";
import { textVariants } from "src/shared/animationVariants";

const Post = ({ post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>{post.attributes.title} - Kartik Nair</title>
        <meta name="description" content={post.attributes.description} />
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <main className="post-page">
          <motion.div variants={textVariants}>
            <Link href="/">
              <a>Go back home</a>
            </Link>
            <h1>{post.attributes.title}</h1>

            <img
              src={`.${post.attributes.image}`}
              alt={post.attributes.description}
            ></img>

            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: post.body }}
            ></div>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
};

export async function getStaticPaths() {
  const fs = require("fs");

  const posts = fs.readdirSync("content/work");
  const paths = posts.map((post) => `/work/${post.slice(0, -3)}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const fm = require("front-matter");
  const marked = require("src/shared/marked");

  const data = fs.readFileSync(`content/work/${params.project}.md`, "utf8");
  const post = fm(data);
  post.body = marked(post.body);

  return { props: { post } };
}

export default Post;
