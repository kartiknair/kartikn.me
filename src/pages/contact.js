import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";
import { textVariants } from "src/shared/animationVariants";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <main className="post-page">
          <motion.div variants={textVariants}>
            <Link href="/">
              <a>Go back home</a>
            </Link>
            <h1>Get In Touch</h1>
            <p>
              The easiest way to get in touch would be through my email:{" "}
              <a href="mailto:hi@kartikn.me">hi@kartikn.me</a>. I'm also pretty
              active on social media so feel free to message me over there.
            </p>
            <p>
              <a href="https://github.com/kartiknair">GitHub</a> /{" "}
              <a href="https://medium.com/kartikanair">Medium</a> /{" "}
              <a href="https://twitter.com">Twitter</a> /{" "}
              <a href="https://instagram.com/nairkartik">Instagram</a>
            </p>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
};

export default Contact;
