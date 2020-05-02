import Head from "next/head";
import Header from "./Header";

const HomeLayout = ({ bio, title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kartik Nair's Blog and Portfolio." />
      </Head>

      <main>
        <Header bio={bio} />
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
