import "public/styles/base.css";
import "public/styles/hljs.css";
import Nav from "src/components/Nav";
import { PageTransition } from "next-page-transitions";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Nav />
      <PageTransition timeout={300} classNames="transition">
        <Component {...pageProps} />
      </PageTransition>
      <style jsx global>{`
        .transition-enter {
          opacity: 0;
        }
        .transition-enter-active {
          opacity: 1;
          transition: opacity 300ms;
        }
        .transition-exit {
          opacity: 1;
        }
        .transition-exit-active {
          opacity: 0;
          transition: opacity 300ms;
        }
      `}</style>
    </main>
  );
}

export default MyApp;
