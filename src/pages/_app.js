import "public/styles/base.css";
import "public/styles/hljs.css";
import Nav from "src/components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
