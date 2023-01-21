import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { HomepageContent } from "../components/homepageContent/HomepageContent";
import { withSSRGuest } from "../utils/withSSRguest";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Homepage</title>
        {/*  <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <HomepageContent />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
