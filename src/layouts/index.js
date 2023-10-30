import React from "react";
import { Global, css } from "@emotion/core";
import TagManager from "react-gtm-module";
import SEO from "../components/SEO";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useWindowSize } from "../hooks/useWindowSize";
export const WindowSizeContext = React.createContext();

export default ({ children }) => {
  const windowSize = useWindowSize();
  const tagManagerArgs = {
    gtmId: `<GTM-MH2PTGV>`
  }
  TagManager.initialize(tagManagerArgs)
  return (
    <>
      <WindowSizeContext.Provider value={windowSize}>
        <Nav />
        <SEO />
        <div className="bg-background">{children}</div>
        <Footer />
        <Global
          styles={css`
            .isTransparent {
              background-color: transparent;
              color: #fff;
            }
            .isOpaque {
              background-color: white;
              color: #009a8d;
              @media (max-width: 768px) {
                background-color: #423833;
                color: #fff;
              }
            }
            .isFocused {
              background: rgba(241, 251, 250, 0.2);
              ::placeholder {
                color: #fff;
              }
            }
            .isScrolled {
              background: rgba(241, 251, 250, 0.2);
              ::placeholder {
                color: #009a8d;
              }
              :focus {
                border: 1px solid #009a8d;
              }
              color: rgba(0, 0, 0, 0.87);
            }
            nav,
            body {
              font-family: var(--font-primary);
            }
            footer {
              font-family: var(--font-secondary);
            }
            :root {
              @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Source+Sans+Pro:300,400,700&display=swap");
              --font-primary: "Montserrat", sans-serif;
              --font-secondary: "Source Sans Pro", sans-serif;
            }
          `}
        ></Global>
      </WindowSizeContext.Provider>
    </>
  );
};
