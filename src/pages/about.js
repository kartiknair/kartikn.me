import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Abput me" />
      </Head>
      <main>
        <a href="/">Go back home</a>
        <h1>About Me</h1>
        <p>
          Hey there! I'm a software engineer and design enthusiast based in
          Dubai. Currently I'm finishing my Bachelor's in Computer Systems while
          building other side projects.
        </p>
        <p>
          My focus area for the past few years has been front-end development
          with React and using HTML & CSS to create beautiful user experiences
          that bring delight.
        </p>
        <p>
          This summer I'm looking to work on more side projects (I have
          something very exciting coming up soon) and also get an internship so
          I can learn from people that are much more skilled than me. If you
          want to work with me on something or just wanna chat head over to the{" "}
          <a href="/contact">contact page</a>.
        </p>
      </main>
    </>
  );
};

export default About;
