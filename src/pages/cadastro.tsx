import Head from "next/head";
import Cadastro from "../components/cadastro/Cadastro";
import { Header } from "../components/header/Header";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function Pagamento() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro Plano Mises</title>
      </Head>
      <Header />
      <Cadastro />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
