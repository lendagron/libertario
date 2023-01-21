import Head from "next/head";
import PainelContent from "../components/painelContent/PainelContent";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Painel() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Painel</title>
      </Head>
      <PainelContent />
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
