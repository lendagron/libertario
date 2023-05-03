import Head from "next/head";
import Cadastro from "../components/cadastroKonkin/CadastroKonkin";
import { Header } from "../components/header/Header";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function CadastroKonkin() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro Plano Konkin</title>
      </Head>
      <Header hasBack={true} />
      <Cadastro />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
