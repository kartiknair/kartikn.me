import "../../public/hljs.css";
import Grotesk from "../components/Grotesk";

function MyApp({ Component, pageProps }) {
  return (
    <Grotesk>
      <Component {...pageProps} />
    </Grotesk>
  );
}

export default MyApp;
