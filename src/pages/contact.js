import Head from "next/head";
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
