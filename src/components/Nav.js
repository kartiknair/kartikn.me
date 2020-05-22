import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a aria-current={pathname === "/" ? "page" : undefined}>Home</a>
          </Link>
        </li>
        <li className="ml1">
          <Link href="/about">
            <a aria-current={pathname === "/about" ? "page" : undefined}>
              About
            </a>
          </Link>
        </li>

        <li className="ml1">
          <Link href="/writing">
            <a aria-current={pathname === "/writing" ? "page" : undefined}>
              Writing
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>
        {`
          nav {
            width: 100%;
            height: 3rem;
          }

          nav,
          ul {
            display: flex;
            list-style: none;
            margin: 0;
          }

          a {
            text-decoration: none;
            color: #666666;
            background-image: none;
          }

          .ml1 {
            margin-left: 1rem;
          }

          [aria-current] {
            color: #000000;
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
