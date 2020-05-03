import Head from "next/head";
import Header from "./Header";
import { motion } from "framer-motion";

const HomeLayout = ({ bio, title, children, writing }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kartik Nair's Blog and Portfolio." />
      </Head>

      <main>
        <motion.div initial="exit" animate="enter" exit="exit">
          <Header bio={bio} writing={writing} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          {children}
        </motion.div>
      </main>
    </>
  );
};

export default HomeLayout;
