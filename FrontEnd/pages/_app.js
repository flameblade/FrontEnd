import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import styled from "styled-components";
import wrapper from "../store/configureStore";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import reducer from "../reducers/";

import "../styles/global.css";
import Navbar from "../components/Navbar";
const MyApp = ({ Component, pageProps }) => {
  const store = createStore(reducer);
  const persistor = persistStore(store);
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
        />

        <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <Main>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Main>
    </React.Fragment>
  );
};

const Main = styled.div`
  background: var(--color-background);
  isolation: isolate;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
