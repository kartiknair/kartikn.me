const Header = ({ bio }) => {
  return (
    <>
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
          {bio}.{" "}
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

      <style jsx>
        {`
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

          .mr1 {
            margin-right: 1rem;
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

export default Header;
