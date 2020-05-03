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

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Abput me" />
      </Head>
      <motion.div initial="exit" animate="enter" exit="exit">
        <main>
          <motion.div variants={textVariants}>
            <Link href="/">
              <a>Go back home</a>
            </Link>
            <h1>About Me</h1>
            <p>
              Hey there! I'm a software engineer and designer based in Dubai.
              Currently I'm finishing my Bachelor's in Computer Systems while
              building other side projects.
            </p>
            <p>
              My focus area for the past few years has been front-end
              development with React and using HTML & CSS to create beautiful
              user experiences that bring delight.
            </p>
            <p>
              This summer I'm looking to work on more side projects (I have
              something very exciting coming up soon) and also get a job so I
              can learn from people that are much more skilled than me. If you
              want to work with me on something or just wanna chat head over to
              the{" "}
              <Link href="/contact">
                <a>contact page</a>
              </Link>
              .
            </p>
          </motion.div>
        </main>
      </motion.div>
    </>
  );
};

export default About;
