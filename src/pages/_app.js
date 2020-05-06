import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import "public/hljs.css";

import Grotesk from "src/components/Grotesk";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Grotesk>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Grotesk>
    );
  }
}

export default MyApp;
