import Head from "next/head";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

const Post = ({ post }) => (
  <>
    <Head>
      <title>{post.attributes.title} - Kartik Nair</title>
      <meta name="description" content={post.attributes.description} />
    </Head>
    <motion.div initial="exit" animate="enter" exit="exit">
      <main className="post-page">
        <motion.div variants={textVariants}>
          <Link href="/writing">
            <a>See more posts</a>
          </Link>
          <h1>{post.attributes.title}</h1>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></div>
        </motion.div>
      </main>
    </motion.div>
  </>
);

export async function getStaticPaths() {
  const fs = require("fs");

  const posts = fs.readdirSync("content/writing");
  const paths = posts.map((post) => `/writing/${post.slice(0, -3)}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const fm = require("front-matter");
  const marked = require("../../marked");

  const data = fs.readFileSync(`content/writing/${params.slug}.md`, "utf8");
  const post = fm(data);
  post.body = marked(post.body);

  return { props: { post } };
}

export default Post;
