import Head from "next/head";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Kartik Nair</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kartik Nair's Blog and Portfolio." />
      </Head>

      <main>
        <div className="header">
          <header>
            <a className="dim" href="/" title="Home">
              <h2>Kartik Nair</h2>
            </a>
            <nav>
              <a className="dim mr1" href="/about" title="About">
                About
              </a>
              <a className="dim mr1" href="/writing" title="Writing">
                Writing
              </a>
              <a className="dim" href="/contact" title="Contact">
                Contact
              </a>
            </nav>
          </header>
          <hr />
          <span>
            Developer and design enthusiast striving to be better. Below are my
            projects, I've worked on mostly open source projects that aim to
            help and make people happy.{" "}
            <a
              href="/contact"
              title="Contact"
              style={{ textDecoration: "underline" }}
              className="dim"
            >
              Wanna get in touch?
            </a>
          </span>
        </div>

        <div className="posts">
          {posts.map((post) => {
            return (
              <div className="post" key={post.path}>
                <img src={post.attributes.image}></img>
                <h3>{post.attributes.title}</h3>
                <p>{post.attributes.description}</p>
                <div className="links">
                  <a
                    href={`/work/${post.path}`}
                    title="Learn more"
                    className="dim mr1"
                  >
                    Learn more
                  </a>
                  <a
                    href={post.attributes.link}
                    title="See live"
                    className="dim"
                  >
                    See in action
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <style jsx>
        {`
          img {
            max-width: 100%;
          }

          .links a {
            color: inherit;
            text-decoration: underline;
          }

          .header a {
            color: inherit;
            text-decoration: none;
          }

          .header {
            margin-bottom: 2rem;
          }

          header {
            display: flex;
            align-items: center;
          }

          .header h2 {
            margin: 0;
          }

          .header hr {
            margin: 0 0 1rem 0;
          }

          nav {
            margin-left: auto;
          }

          .link {
            text-decoration: underline;
          }

          .title,
          nav .link {
            text-decoration: none;
          }

          header.bb {
            margin-top: 8%;
          }

          .dim {
            opacity: 1;
            transition: opacity 0.15s ease-in;
          }
          .dim:hover,
          .dim:focus {
            opacity: 0.5;
            transition: opacity 0.15s ease-in;
          }
          .dim:active {
            opacity: 0.8;
            transition: opacity 0.15s ease-out;
          }

          .mr1 {
            margin-right: 1rem;
          }

          .post {
            width: 100%;
            text-decoration: none;
            margin: 2rem 0 3rem 0;
          }

          @media (max-width: 768px) {
            nav a {
              margin: 0;
            }
          }

          @media (max-width: 575px) {
            header {
              flex-direction: column;
            }

            header a {
              margin: 0;
            }

            nav {
              margin: 1rem 0;
              width: 100%;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            }

            hr {
              margin-top: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const fm = require("front-matter");

  const posts = fs.readdirSync("content/work");
  let newPosts = [];

  posts.forEach((post) => {
    const data = fs.readFileSync(`content/work/${post}`, "utf8");
    let newPost = fm(data);
    newPost.path = post.slice(0, -3);
    newPosts.push(newPost);
  });

  newPosts.sort((a, b) => {
    return b.attributes.date - a.attributes.date;
  });

  return {
    props: {
      posts: newPosts,
    },
  };
}

export default Home;
