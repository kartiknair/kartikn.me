const Grotesk = ({ theme, children }) => {
  const defaultTheme = {
    bg: "#ffffff",
    lightFg: "#2d3748",
    darkFg: "#000000",
    preBg: "#f6f8fa",
    preFg: "#2d3748",
    codeBg: "rgba(0, 0, 0, 0.04)",
    codeFg: "#eb5656",
  };

  if (theme) {
    Object.keys(defaultTheme).forEach((key) => {
      if (!theme.hasOwnProperty(key)) {
        theme[key] = defaultTheme[key];
      }
    });
  } else {
    theme = defaultTheme;
  }

  return (
    <div className="grotesk">
      {children}
      <style jsx global>
        {`
          @font-face {
            font-family: noah;
            font-weight: 400;
            src: url(/fonts/Noah-Regular.woff);
            font-style: regular;
          }

          @font-face {
            font-family: noah;
            font-weight: 700;
            src: url(/fonts/Noah-Bold.woff);
            font-style: regular;
          }

          @font-face {
            font-family: noah;
            font-weight: 400;
            src: url(/fonts/Noah-RegularItalic.woff);
            font-style: italic;
          }

          @font-face {
            font-family: noah;
            font-weight: 700;
            src: url(/fonts/Noah-BoldItalic.woff);
            font-style: italic;
          }

          * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }

          html {
            font-size: 1rem;
          }

          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: ${theme.bg};
            color: ${theme.darkFg};
          }

          .grotesk p {
            color: ${theme.darkFg};
          }

          main {
            font-family: noah, sans-serif;
            width: 45%;
            margin: 5% 27.5%;
          }

          @media (max-width: 575px) {
            main {
              width: 85%;
              margin: 12% 7.5%;
            }
          }

          @media (min-width: 1900px) {
            html {
              font-size: 1.5rem;
            }
          }

          @media (min-width: 2600px) {
            html {
              font-size: 2rem;
            }
          }

          @media (min-width: 3400px) {
            html {
              font-size: 2.5rem;
            }
          }

          @media (min-width: 4000px) {
            html {
              font-size: 3rem;
            }
          }

          .grotesk {
            width: 100%;
            height: 100%;
            line-height: 1.5;
          }

          .grotesk img {
            max-width: 100%;
          }

          .grotesk h1 {
            font-size: 2rem;
          }

          .grotesk h2 {
            font-size: 1.7411rem;
          }

          .grotesk h3 {
            font-size: 1.5157rem;
          }

          .grotesk h4 {
            font-size: 1.3195rem;
          }

          .grotesk h5 {
            font-size: 1.1487rem;
          }

          .grotesk h6 {
            font-size: 1rem;
          }

          .grotesk p,
          .grotesk a,
          .grotesk ul,
          .grotesk ol,
          .grotesk li {
            font-size: 1rem;
          }

          .grotesk blockquote cite,
          .grotesk q cite {
            font-size: 0.7rem;
          }

          .grotesk ul,
          .grotesk ol,
          .grotesk li,
          .grotesk blockquote,
          .grotesk q {
            color: ${theme.lightFg};
          }

          .grotesk h1,
          .grotesk h2,
          .grotesk h3,
          .grotesk h4,
          .grotesk h5,
          .grotesk h6,
          .grotesk p,
          .grotesk a,
          .grotesk blockquote,
          .grotesk q,
          .grotesk hr {
            margin: 1rem 0;
          }

          .grotesk hr {
            height: 1px;
            background-color: ${theme.darkFg};
            border: none;
            margin: 1rem 0;
          }

          .grotesk ul,
          .grotesk ol {
            margin: 0.5rem 1.5rem;
          }

          .grotesk li {
            margin: 0.2rem 0;
          }

          .grotesk pre {
            background-color: ${theme.preBg};
            overflow: auto;
            padding: 1.5rem 2rem;
          }

          .grotesk pre code {
            background: none;
            color: ${theme.preFg};
            padding: 0;
          }

          .grotesk code {
            background-color: ${theme.codeBg};
            color: ${theme.codeFg};
            padding: 0.2rem;
            border-radius: 0.2rem;
          }

          .grotesk mark {
            padding: 0.2rem;
          }

          .grotesk blockquote {
            background-color: ${theme.bg};
            color: ${theme.lightFg};
            border-left: 0.4em solid ${theme.darkFg};
            padding: 0;
            padding-left: 1.5rem;
            font-style: italic;
          }

          .grotesk a {
            color: blue;
          }

          .grotesk blockquote a {
            font-size: inherit;
          }

          /* Change the default selection color */

          ::selection {
            color: white;
            background: ${theme.darkFg};
          }

          ::-webkit-selection {
            color: white;
            background: ${theme.darkFg};
          }

          ::-o-selection {
            color: white;
            background: ${theme.darkFg};
          }

          ::-moz-selection {
            color: ${theme.bg};
            background: ${theme.darkFg};
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
        `}
      </style>
    </div>
  );
};

export default Grotesk;
