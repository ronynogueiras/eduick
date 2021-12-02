import "../styles/globals.css";
import type { AppProps } from "next/app";
import LandingPage from "../src/layout/LandingPage";
import { NextPage } from "next";
import Head from "next/head";
import { AuthProvider } from "../src/contexts/auth";

type AppLayoutProps = AppProps & {
  Component: NextPage & { Layout: React.FC };
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.Layout ? Component.Layout : LandingPage;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default MyApp;
