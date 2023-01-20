import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { HomepageContent } from "../components/homepageContent/HomepageContent";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  if (cookies["CL.token"]) {
    return {
      redirect: {
        destination: "/painel",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
