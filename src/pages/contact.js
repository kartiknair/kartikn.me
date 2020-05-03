import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <main className="post-page">
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
      </main>
    </>
  );
};

export default Contact;
