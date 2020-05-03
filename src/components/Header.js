import Link from "next/link";

const Header = ({ bio, writing }) => {
  return (
    <>
      <div className="header">
        <header>
          <Link href="/">
            <a className="dim" title="Home">
              <h2>Kartik Nair</h2>
            </a>
          </Link>

          <nav>
            <Link href="/about">
              <a className="dim mr1" title="About">
                About
              </a>
            </Link>

            {writing ? (
              <Link href="/writing">
                <a className="dim mr1" title="Writing">
                  Writing
                </a>
              </Link>
            ) : (
              <Link href="/">
                <a className="dim mr1" title="Work">
                  Work
                </a>
              </Link>
            )}

            <Link href="/contact">
              <a className="dim" title="Contact">
                Contact
              </a>
            </Link>
          </nav>
        </header>
        <hr />
        <span>
          {bio}.{" "}
          <Link href="/contact">
            <a
              title="Contact"
              style={{ textDecoration: "underline" }}
              className="dim"
            >
              Wanna get in touch?
            </a>
          </Link>
        </span>
      </div>

      <style jsx>
        {`
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
