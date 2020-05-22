import "public/styles/base.css";
import "public/styles/hljs.css";
import Nav from "src/components/Nav";
import { PageTransition } from "next-page-transitions";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();

  return (
    <main>
      <Nav />
      <PageTransition timeout={300} classNames="transition">
        <Component {...pageProps} key={route} />
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
