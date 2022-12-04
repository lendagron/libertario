import Head from "next/head";
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
