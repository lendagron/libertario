import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { Header } from "../components/header/Header";
import { HomepageContent } from "../components/homepageContent/HomepageContent";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Homepage</title>
      </Head>
      <Header />
      <HomepageContent />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
