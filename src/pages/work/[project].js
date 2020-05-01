import Head from "next/head";
import React from "react";

const Post = ({ post }) => (
  <>
    <Head>
      <title>{post.attributes.title} - Kartik Nair</title>
      <meta name="description" content={post.attributes.description} />
    </Head>
    <main
      className="post-page"
      dangerouslySetInnerHTML={{ __html: post.body }}
    ></main>
  </>
);

export async function getStaticPaths() {
  const fs = require("fs");

  const posts = fs.readdirSync("content/work");
  const paths = posts.map((post) => `/work/${post.slice(0, -3)}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const fm = require("front-matter");
  const marked = require("../../marked");

  const data = fs.readFileSync(`content/work/${params.project}.md`, "utf8");
  const post = fm(data);
  post.body = marked(post.body);
  post.body =
    `<a href="/">Go back home</a>
    <h1>${post.attributes.title}</h1>
    <img src=".${post.attributes.image}" alt="${post.attributes.description}" style="width: 100%"/>` +
    post.body;

  return { props: { post } };
}

export default Post;
