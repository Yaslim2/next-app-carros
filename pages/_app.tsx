import Layout from "@components/Layout";
import store from "@store/index";
import { GlobalStyle } from "@styles/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
